import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import axios from 'axios';
import GetList from 'client/mixins/get-list';

export default Route.extend(GetList, {
	beforeModel: function(){
	},

	model: function(){
	},
	setupController: function(controller){
		let self = this;

		controller.setProperties({
			name: '', address: '', dob: '', email: '', phone: '', skill: '', position: '',
			school: '', degree: '', schoolstart: '', schoolend: '', major: '', grade: '',
			companyname: '', oldposition: '', companystart: '', companyend: '', summary: ''
		});
		self.getDegreesList();
		self.getPositionsList();
		self._super();
	},
	actions: {
	}
});
