require([
    'ko',
    'jquery',
    'jquery/validate',
    'Magento_Ui/js/lib/view/utils/async'
], function (ko,$) {
    'use strict';
    $.validator.addMethod(
        'custom-validate-email', function (emailAddress) {
            var pattern = new RegExp(/^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([n]|[e]|[t]){2,})$/i);
            return pattern.test(emailAddress);
        }, $.mage.__('please enter the correct field format "@domain.net"!')
    );

    $.async("#email_address", function () {
        $("#email_address").attr("data-validate",($("#email_address").attr("data-validate")).replace("validate-email","custom-validate-email"));
    });
});
