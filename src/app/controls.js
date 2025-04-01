const controls=[
    {
    name:'signUp',
    heading:'Sign Up',
    style:{
      fontWeight: '700',
      fontSize:'28px'
    },
    filter_type:['signUp']
    },
    {
        name:'login',
        heading:'Login',
        style:{
          fontWeight: '700',
          fontSize:'20px'
        },
        filter_type:['login']
        },
    {
    name: 'username',
		type: 'input',
		label: 'Username',
		placeholder: 'Enter User Name',
		span: 12,
		size: 'md',
		rules: {
			required: 'Required',
		},
		style: { width: '95%',
      marginTop: '3px' },
      filter_type:['signUp']
  },
  {
    name: 'email',
		type: 'input',
		label: 'Email',
		placeholder: 'Enter Email Address',
		span: 12,
		size: 'md',
		rules: {
			required: 'Required',
		},
		style: { width: '95%',
      marginTop: '3px' },
      filter_type:['signUp','login','reset']
  },
  {
    name: 'password',
		type: 'input',
		label: 'Password',
		placeholder: 'Enter Password ',
		span: 12,
		size: 'md',
		rules: {
			required: 'Required',
		},
		style: { width: '95%',
      marginTop: '3px' },
      filter_type:['signUp','login']
  }
  ]

  const getControls=(filterType='signUp')=>{
    const filteredControls=controls.filter((item)=>item.filter_type.includes(filterType))
    return filteredControls
  }

  export default getControls;