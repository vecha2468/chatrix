const changingLoginFormStates=(formState)=>{
    if(formState==='signUp')
    {
        return [
            {
                text:'Already have an account?',
                action:'Login here',
                output:'login'
            }
        ]
    }
    else if(formState ==='login')
    {
        return [
            {
                text:'Create an account?',
                action:' Click here',
                output:'signUp'
            },
            {
                text:'Forgot Password?',
                action:'Click here',
                output:'reset'
            }
        ]  
    }
    else{
        return [
            {
                text:'Create an account?',
                action:' Click here',
                output:'signUp'
            }
        ]
    }

}

export default changingLoginFormStates