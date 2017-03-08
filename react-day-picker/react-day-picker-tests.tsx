import * as React from 'react';
import DayPicker = require('react-day-picker');

function isSunday(day: Date) {
    return day.getDay() === 0;
}

function MyComponent() {
    return (
        <DayPicker
            ref="foo" initialMonth={ new Date(2016, 1) } localeUtils={DayPicker.LocaleUtils} modifiers={{ isSunday }}
        />
    );
}
DayPicker.DateUtils.clone(new Date());
DayPicker.DateUtils.isDayInRange(new Date(), { from: new Date(), to: new Date(2050) });

interface MyCaptionProps extends DayPicker.CaptionElementProps {
}
class Caption extends React.Component<MyCaptionProps, {}> {
    render() {
        const { date, locale, localeUtils, onClick } = this.props;

        if (!date || !localeUtils || !onClick || typeof locale === 'undefined') {
            return null;
        }

        return (
            <div className="DayPicker-Caption" onClick={ (e) => onClick(date, e) }>
                { localeUtils.formatMonthTitle(date, locale) }
            </div>
        );
    }
}
<DayPicker captionElement={<Caption/>}/>
