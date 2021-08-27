import { isEmpty } from '@ember/utils';
import $ from 'jquery';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import axios from 'axios';
import { later } from '@ember/runloop';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
    getApplicantsList: function(page) {
        let self = this,
            controller = self.get('controller');

        axios({
            method: "GET",
            data:{},
            url: 'https://desolate-cove-53213.herokuapp.com/api/applicantdatas'
        })
        .then(function(response){
            controller.set('applicants', response.data);
        })
        .catch(function(error){
            console.log('Error ' + error);
        });
    },
    
    getApplicant: function(param) {
        let self = this,
            controller = self.get('controller');

        axios({
            method: "GET",
            data:{},
            url: 'https://desolate-cove-53213.herokuapp.com/api/applicantdatas/'+param
        })
        .then(function(response){
            controller.set('applicantdata', response.data);
        })
        .catch(function(error){
            console.log('Error ' + error);
        });
    },
    getApplicantEducation: function(param) {
        let self = this,
            controller = self.get('controller');

        axios({
            method: "GET",
            data:{},
            url: 'https://desolate-cove-53213.herokuapp.com/api/applicanteducations/applicant/'+param
        })
        .then(function(response){
            controller.set('applicanteducation', response.data);
        })
        .catch(function(error){
            console.log('Error ' + error);
        });
    },
    getApplicantExperience: function(param) {
        let self = this,
            controller = self.get('controller');

        axios({
            method: "GET",
            data:{},
            url: 'https://desolate-cove-53213.herokuapp.com/api/applicantexperiences/applicant/'+param
        })
        .then(function(response){
            controller.set('applicantexperience', response.data);
        })
        .catch(function(error){
            console.log('Error ' + error);
        });
    },

    actions: {
        updateApplicant(id, email, status){
            let controller = this.get('controller');
            console.log(id);
            console.log(status);
            //submit data
            axios({
                method: "PUT",
                data:{
                    email: email,
                    status: status
                },
                url: 'https://desolate-cove-53213.herokuapp.com/api/applicantdatas/'+id
            })
            .then(function(response){
                console.log('Update applicant success!');
                alert("CV application has been "+status);
                location.href = '/';
            })
            .catch(function(error){
                console.log('Error ' + error);
                alert("Error updating CV application. Please try again.");
            });
        },
    }
});
