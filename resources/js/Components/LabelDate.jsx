import moment from "moment/moment";
import 'moment/locale/fr';

export default function LabelStatus({ date, format = 'dddd D MMMM YYYY à h:mm:ss', className}) {
    moment.locale('fr');
    const dateFormatted = moment(date).format(format)

    return (<span className={className}>{dateFormatted}</span>);
}
