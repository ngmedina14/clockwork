

// Validate the fields from form
// ex.
// <form id="login"> <input required placeholder="field" aria-describedby="errorElementID"/> </form>
// let fields = document.querySelectorAll("#login input,select");
// promptValidation(fields)
function promptValidation(formFields) {
    [...formFields].map((field) => {
        field.onblur = (event) => {
            // check if the value is valid
            const isValid = event.target.validity.valid;

            // get the element id
            let targetPlaceholder = event.target.getAttribute('placeholder');

            // get the value from the input
            var targetValue = event.target.value;

            // get the validation message from the specific input
            let message = event.target.validationMessage;

            // get the value of aria-describedby : the value of this is the same as the id of the error element
            const connectedValidationId = event.target.getAttribute('aria-describedby');

            //check if the connectedValidationId has value if empty return false if true get the element
            const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;

            isInvalidSelect = () => {
                if (event.target.nodeName == "SELECT") {
                    let filterField = [...event.target.options].filter(options => options.selected).map(option => option.text)
                    return (filterField == '-') ? true : false;
                }
                return false;
            }

            // if Invalid
            if (!isValid || isInvalidSelect()) {
                (!targetValue) ? message = `${targetPlaceholder} field is required.` : message
                event.target.classList.add("is-invalid");
                connectedValidation.classList.add("invalid-tooltip");
                connectedValidation.textContent = message;
            } else { // if Valid
                event.target.classList.remove("is-invalid");
                connectedValidation.textContent = '';
            }
        };
    });
}

// Check all valid fields simultaneously and show the validation message
// ex.
// <form id="login"> <input required placeholder="field" aria-describedby="errorElementID"/> </form>
// let fields = document.querySelectorAll("#login input,select");
// validateFormFields(fields)
// True  = all fields are valid
// False = There's an invalid field
function validateFormFields(formFields) {
    let valid = [...formFields].map((field) => {
        let targetPlaceholder = field.getAttribute('placeholder');
        var targetValue = field.value;
        let message = field.validationMessage;
        const connectedValidationId = field.getAttribute('aria-describedby');
        const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;
        isInvalidSelect = () => {
            if (field.nodeName == "SELECT") {
                let filterField = [...field.options].filter(options => options.selected).map(option => option.text)
                return (filterField == '-') ? true : false;
            }
            return false;
        }

        // if Invalid
        if (!field.checkValidity() || isInvalidSelect()) {
            (!targetValue) ? message = `${targetPlaceholder} field is required.` : message
            field.classList.add("is-invalid");
            connectedValidation.classList.remove("invalid-tooltip");
            connectedValidation.classList.add("invalid-feedback");
            connectedValidation.textContent = message;
            return false;
        } else {// if Valid
            field.classList.remove("is-invalid") ;
            connectedValidation.textContent = '';
            return true;
        }
    });
    (valid.includes(false)) ? [...formFields][valid.findIndex(element => element == false)].focus() : null;
    return !valid.includes(false)
}