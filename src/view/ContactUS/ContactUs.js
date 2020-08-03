import React, {useState, useEffect } from "react";
import {ContactForm, ContactInfos} from '../../Components/ContactUs';
import { useStyle } from "./ContactUs.style";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {getContactInfos} from '../../client';

function ContactUs() {
	const classes = useStyle();
	const matches = useMediaQuery('(max-width:768px)');
	const [infos, setInfos] = useState({isLoading: true, data: []});

	useEffect(() => {
			getContactInfos((res) => {
					setInfos({isLoading: false, data: res.data})
			})
	},[])
	
	const handleSubmit = (formData) => {

	}

	return (
		<div className={'page ' + classes.root}>
			<div className={classes.container}>
				{matches
				?<>
					<ContactInfos infos={infos.data}/>
					<ContactForm onSubmit={handleSubmit}/>
				</>
				:<>
					<ContactForm onSubmit={handleSubmit}/>
					<div className={classes.border}></div>
					<ContactInfos infos={infos.data}/>
				</>}
			</div>
		</div>
	);
}

export default ContactUs;