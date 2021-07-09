<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">COPYRIGHT © {{ currentYear }} - ALL RIGHTS RESERVED</div>
        <div class="col-md-6 text-right">
          <a href="javascript:void(0)" v-b-modal.TermsAndConditionsModal>
            <img src="../assets/images/link-icon.svg" alt="terms and conditions">
            TERMS AND CONDITIONS
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear: function () {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
</style>