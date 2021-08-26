import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import axios from 'axios';
import GetList from 'client/mixins/get-list';

export default Route.extend(GetList, {
	id: 0,
	beforeModel: function(){
	},

	model: function(param){
		this.set('id', param.id);
	},
	setupController: function(controller){
		console.log(this.get('id'));
		let self = this;
		self.getApplicant(this.get('id'));
		self.getApplicantEducation(this.get('id'));
		self.getApplicantExperience(this.get('id'));
		self._super();
	},
	actions: {
	}
});
