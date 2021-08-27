import { isEmpty } from '@ember/utils';
import $ from 'jquery';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import axios from 'axios';
import { later } from '@ember/runloop';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
    getDegreesList: function(page) {
        let self = this,
            controller = self.get('controller');

        axios({
            method: "GET",
            data:{},
            url: 'https://desolate-cove-53213.herokuapp.com/api/listdegrees'
        })
        .then(function(response){
            controller.set('listdegrees', response.data);
        })
        .catch(function(error){
            console.log('Error ' + error);
        });
    },
    getPositionsList: function(page) {
        let self = this,
            controller = self.get('controller');

        axios({
            method: "GET",
            data:{},
            url: 'https://desolate-cove-53213.herokuapp.com/api/listpositions'
        })
        .then(function(response){
            controller.set('listpositions', response.data);
        })
        .catch(function(error){
            console.log('Error ' + error);
        });
    },

    actions: {
        //update any field according to ID
        updatefield(id){
            console.log(id);
            let controller = this.get('controller');
            controller.set(id,document.getElementById(id).value);
            console.log(controller.get(id));
        },
        submitData(){
            let controller = this.get('controller');
            //submit data
            axios({
                method: "POST",
                data:{
                    fullname: controller.get('name'),
                    email: controller.get('email'),
                    phone: controller.get('phone'),
                    address: controller.get('address'),
                    birth_date: controller.get('dob'),
                    skills: controller.get('skill'),
                    applied_position_id: controller.get('position'),
                    school_name: controller.get('school'),
                    school_start_date: controller.get('schoolstart'),
                    school_end_date: controller.get('schoolend'),
                    major: controller.get('major'),
                    grade: controller.get('grade'),
                    degree_id: controller.get('degree'),
                    company_name: controller.get('companyname'),
                    old_position: controller.get('oldposition'),
                    company_start_date: controller.get('companystart'),
                    company_end_date: controller.get('companyend'),
                    summary: controller.get('summary'),
                },
                url: 'https://desolate-cove-53213.herokuapp.com/api/applicantdatas'
            })
            .then(function(response){
                console.log('Add applicant success!');
                alert("Your CV application has been sent! Please check your e-mail inbox.");
                location.href = '/';
            })
            .catch(function(error){
                console.log('Error ' + error);
                alert("Error sending CV application. Please try again.");
            });
        },
    }
});
