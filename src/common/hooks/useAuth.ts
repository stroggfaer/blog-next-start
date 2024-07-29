import { Modal } from 'antd';

export default function useAuth() {
	const { confirm } = Modal;
    // Выйти
	const logout = (redirect?: string) => {
		redirect = '';
		confirm({
			title: 'Are you sure you want to exit?',
			content: 'The session will end and you will be taken to the login screen.',
			okText: 'Confirm',
			onOk() {
				console.log('OK');
				//await stores.authLogout();
				// if(redirect) await router.push(redirect);
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	return {
		logout
	}
}
