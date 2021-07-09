<template>
  <div id="Contact" class="contact-section content-section">
    <div class="content-header">
      <h1>GET IN TOUCH</h1>
      <h2>FEEL FREE TO CONTACT ME IF YOU HAVE SOMETHING TO SAY</h2>
    </div>
    <div class="contact-info-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="contact-info">
                <img src="../assets/images/location-icon.svg" alt="Location"> {{ $root.profileInfo.location }}
            </span>
          </div>
          <div class="col-md-4">
            <a :href="`mailto:${$root.profileInfo.email}`" class="contact-info" v-b-tooltip.hover
               title="Message Me">
              <img src="../assets/images/mail-icon.svg" alt="E-Mail"> {{ $root.profileInfo.email }}
            </a>
          </div>
          <div class="col-md-4">
            <span class="contact-info">
                <img src="../assets/images/skype-icon.svg" alt="Skype">
                {{ $root.profileInfo.skype }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-form">
      <div class="container">
        <form @submit.prevent="submitForm">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="NameSurnameTextbox">NAME - SURNAME</label>
              <input type="text" class="form-control" :class="{'is-invalid': !nameSurname.isValid}"
                     id="NameSurnameTextbox" v-model="nameSurname.value">
            </div>
            <div class="form-group col-md-6">
              <label for="EMailTextbox">E-MAIL</label>
              <input type="email" class="form-control" :class="{'is-invalid': !eMail.isValid}"
                     id="EMailTextbox" v-model="eMail.value">
            </div>
          </div>
          <div class="form-group">
            <label for="SubjectTextbox">SUBJECT</label>
            <input type="text" class="form-control" :class="{'is-invalid': !subject.isValid}"
                   id="SubjectTextbox" v-model="subject.value">
          </div>
          <div class="form-group">
            <label for="MessageTextbox">MESSAGE</label>
            <textarea class="form-control" :class="{'is-invalid': !message.isValid}" id="MessageTextbox"
                      rows="5" v-model="message.value"></textarea>
          </div>
          <div class="form-group">
            <vue-recaptcha :sitekey="$root.env.VUE_APP_SITE_KEY" ref="recaptcha" @verify="onCaptchaVerified" @expired="onCaptchaExpired"></vue-recaptcha>
          </div>
          <div class="submit-button">
            <b-button variant="primary" type="submit" :disabled="isSending">
                            <span v-if="isSending"><img class="loading-image" src="../assets/images/loading.gif" alt="loading"/>
                                LOADING..</span>
              <span v-else>SEND</span>
            </b-button>

            <div v-if="formMessage.message" class="validation-message"
                 :class="{'error': !formMessage.isValid, 'success': formMessage.isValid}">
              {{ formMessage.message }}
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="social-links text-center">
      <h3 class="social-links-header">FOLLOW ME ON</h3>
      <div class="flex-box justify-center">
        <a :href="$root.profileInfo.linkedinURL" target="_blank" v-b-tooltip.hover
           title="Visit on LinkedIn"><img src="../assets/images/linkedin-icon.svg" alt=""></a>
        <a :href="$root.profileInfo.githubURL" target="_blank" v-b-tooltip.hover
           title="Visit on GitHub"><img src="../assets/images/github-icon.svg" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

const axios = require('axios');

export default {
  name: 'Contact',
  components: {
    VueRecaptcha
  },
  data: function () {
    return {
      formMessage: {
        message: '',
        isValid: false
      },
      isSending: false,
      recaptchaToken: '',
      nameSurname: {
        value: '',
        isValid: true
      },
      eMail: {
        value: '',
        isValid: true
      },
      subject: {
        value: '',
        isValid: true
      },
      message: {
        value: '',
        isValid: true
      }
    }
  },
  methods: {
    submitForm: function () {
      try {
        this.isSending = true;

        this.nameSurname.isValid = this.nameSurname.value !== '';
        this.eMail.isValid = this.eMail.value !== '' || (this.eMail.value !== '' && this.$root.validateEmail(this.eMail.value));
        this.subject.isValid = this.subject.value !== '';
        this.message.isValid = this.message.value !== '';

        let isFormValid = this.nameSurname.isValid && this.eMail.isValid && this.subject.isValid && this.message.isValid;

        if (isFormValid) {
          const formData = new FormData();
          formData.set('g-recaptcha-response', this.recaptchaToken);
          formData.set('NameSurname', this.nameSurname.value);
          formData.set('EMail', this.eMail.value);
          formData.set('Subject', this.subject.value);
          formData.set('Message', this.message.value);

          axios({
            url: this.$root.env.VUE_APP_MAIL_SENDER,
            method: 'post',
            data: formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(response => {
            this.formMessage.message = response.data.message;
            this.formMessage.isValid = response.data.isSuccess;

            if (response.data.isSuccess) {
              this.nameSurname.value = this.eMail.value = this.subject.value = this.message.value = '';
              this.$refs.recaptcha.reset();
            }

            this.isSending = !this.isSending;
          }).catch(error => {
            this.formMessage.message = error;
            this.formMessage.isValid = false;
            this.isSending = !this.isSending;
          });
        } else {
          this.formMessage.message = 'Please check required fields.';
          this.formMessage.isValid = false;
          this.isSending = false;
        }
      } catch (e) {
        this.isSending = false;
        console.log('Raised an error: ', e);
      }
    },
    onCaptchaVerified: function (token) {
      this.recaptchaToken = token;
    },
    onCaptchaExpired: function () {
      this.recaptchaToken = '';
    }
  }
}
</script>

<style scoped>

</style>