import $ from 'jquery';

export default function() {
    $(() => {
        $("[name$=homeless_code]").attr({"disabled": "disabled"});
    });
}

