frappe.ui.form.ControlDate = frappe.ui.form.ControlDate.extend({

    set_datepicker: function () {
        var convert = function (value) {
            return (!value || typeof value != 'object' ? value :
                calendar.fromJD(value.toJD()));
        };
        var current = $(this).calendarsPicker('option');
        calendar = $.calendars.instance('islamic');

        $(this).calendarsPicker('option', {
            calendar: calendar,
            onSelect: null,
            onChangeMonthYear: null,
            defaultDate: convert(current.defaultDate),
            minDate: convert(current.minDate),
            maxDate: convert(current.maxDate)
        }).
        calendarsPicker('option', {
            onSelect: current.onSelect,
            onChangeMonthYear: current.onChangeMonthYear
        });
        this.$input.calendarsPicker(this.option);
        this.calendarsPicker = this.$input.data('calendarsPicker');

    }

});