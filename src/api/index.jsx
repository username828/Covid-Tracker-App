import axios from "axios";

const url = "https://disease.sh/v3/covid-19";

export const fetchData = async(country) =>{

    let changeableUrl=`${url}/all`;
    if(country){
        changeableUrl=`${url}/countries/${country}`
    }

    try{
        const {data: {cases,recovered,deaths,updated}} = await axios.get(changeableUrl);
        return {cases,recovered,deaths,updated};
    } catch (error){
        console.log(error);
        
    }
}


export const fetchDailyData = async() =>{
    try{
        const {data}=await axios.get(`${url}/historical/all?lastdays=all`);
        //console.log("Historical data",data.cases)


        return data;
    } catch(error){
        console.log(error);
    }
}


export const fetchCountry = async()=>{
    try{
        const {data} = await axios.get(`${url}/countries`);
        return data.map(country=>country.country)
    }
    catch{
        console.log(error);

    }
}