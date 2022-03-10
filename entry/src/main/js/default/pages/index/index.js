
import fetch from '@system.fetch';
export default {
    data: {
        // cloudy, windy, partly_sunny, rainy, sleeting, sun_n_rain, sun_n_windy, sunny, thunderstorm_n_rain, thunderstorm
        weather: "partly_sunny",
        weather_description:"Cloudy",
        notification:"Team Meeting 11am",
        min_progress_calories:'20',
        min_progress_footSteps:'50'
    },
    fetchDate : function(){
        const date = new Date();
        this.date_d=(String(date.getDate()))
        this.date_m=(String(date.getMonth()+1))
        const dayOfWeek = (date.getDay())
        const month=(date.getMonth()+1)
        if (dayOfWeek==1)
        this.date_w="Mon"
        else if (dayOfWeek==2)
        this.date_w="Tue"
        else if (dayOfWeek==3)
        this.date_w="Wed"
        else if (dayOfWeek==4)
        this.date_w="Thu"
        else if (dayOfWeek==5)
        this.date_w="Fri"
        else if (dayOfWeek==6)
        this.date_w="Sat"
        else
        this.date_w="Sun"

        if (month==1)
        this.date_m="Jan"
        else if (month==2)
        this.date_m="Feb"
        else if (month==3)
        this.date_m="Mar"
        else if (month==4)
        this.date_m="Apr"
        else if (month==5)
        this.date_m="May"
        else if (month==6)
        this.date_m="Jun"
        else if (month==7)
        this.date_m="Jul"
        else if (month==8)
        this.date_m="Aug"
        else if (month==9)
        this.date_m="Sep"
        else if (month==10)
        this.date_m="Oct"
        else if (month==11)
        this.date_m="Nov"
        else
        this.date_m="Dec"
    },
    fetchData: function () {
        let data;
        fetch.fetch({
            complete: () => {
                this.weather = data.weather;
                this.weather_description = data.weather_description;
                this.notification=data.notification;
                this.min_progress_calories=data.min_progress_calories;
                this.min_progress_footSteps=data.min_progress_footSteps;
            }
        })
    },
    onInit() {
        this.fetchData();
        this.fetchDate();
    },
}