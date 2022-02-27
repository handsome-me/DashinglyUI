type Theme_SubType={
    normal:string,
    light:string,
    dark:string,
}

type Theme_Type={
    primary:Theme_SubType
    error:Theme_SubType
    success:Theme_SubType
    normal:Theme_SubType
    color:string
}

const Theme:Theme_Type={

    primary:{
         normal:"#3366ff",
        light:"#234cc7",
        dark:"#082d9b"
    },
    error:{
        normal:"#D14343",
        light:"#bd3a3a",
        dark:"#b51717"
    },
    success:{
        normal:"#00d09c",
        light:"#11a37e",
        dark:"#19896c"
    },
    normal:{
        normal:"white",
        light:"snow",
        dark:"#d5d5d5"
    },
   color:"white"

}

export default Theme;