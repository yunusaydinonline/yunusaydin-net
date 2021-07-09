<template>
  <b-modal id="TermsAndConditionsModal" size="xl" title="TERMS OF USE" hide-footer>
    <div class="content">
      <p>This website is brought to use in the event that Internet user agrees to the following conditions.
        Every user who use the website www.yunusaydin.net is deemed to have accepted these conditions.</p>
      <p><strong>Copyright:</strong></p>
      <p>All rights of the website www.yunusaydin.net belong to YUNUS AYDIN (hereinafter
        referred to as Site Owner). All software products, texts, articles, pictures, documents and such
        intellectual products available in the content of the website www.yunusaydin.net are protected
        pursuant
        to the relevant legal legislation. None of these products shall be used without the permission of
        the Site Owner. Duplication, reproduction, utilization and distribution of these products without
        any information and permission are legally prohibited.</p>
      <p><strong>Regarding Personal and Non-Commercial Utilization Limits:</strong></p>
      <p>It is obligatory to state that the Site Owner is trademark and copyright owner in personal and
        non-commercial duplications permitted up to one copy.</p>
      <p><strong>Obligations of User:</strong></p>
      <p>User who becomes a member in the website www.yunusaydin.net guarantees the authenticity of the
        information
        user provides. User is responsible for all actions and consequences that may arise from these
        actions realized by way of user name and password which belong to the user. User undertakes not to
        give user's own password and username to someone else.</p>
      <p>Even though www.yunusaydin.net is a website that is constantly updated, Site Owner is not held
        responsible
        for deficiencies or mistakes arising from typographic or late updates on the website.</p>
      <p><strong>Regarding Connections (Links) Given to the Third Party Sites:</strong></p>
      <p>In the website www.yunusaydin.net, connection (link) can be given to other sites directly or
        indirectly.
        The purpose of these connections is to give information or advertisement. Contents of other sites
        connected via www.yunusaydin.net are under the responsibility of the sites connected. Site Owner
        shall
        not be held responsible for contents of these sites and any problem which may arise with regards to
        these sites.</p>
      <p><strong>Regarding Information Users Send to www.yunusaydin.net:</strong></p>
      <p>There are forms to be filled over the internet by users in the website www.yunusaydin.net. Users have
        no
        right to use disturbing words which include strong language, threat, provocation, and illegal
        contents and to harm legal and personal rights of others. Since these kinds of forms and pages are
        regarded as Site Owner's intellectual products, using them on other Internet pages and as examples
        to reproduce are forbidden.</p>
      <p>Internet users have no right to sell a product or a service, making a commercial advertisement and
        displaying similar commercial behaviors by using these pages.</p>
      <p><strong>Regarding Rights and Responsibilities:</strong></p>
      <p>Site Owner uses reasonable efforts to check the authenticity of all the content on the site. However,
        www.yunusaydin.net and Site Owner shall not be held responsible for the information in the site
        content.
        Site Owner can do any change and innovation in the pages. The website www.yunusaydin.net and Site
        Owner
        shall not be encumbered due to information errors which may arise because of these changes.</p>
      <p>www.yunusaydin.net and Site Owner shall not be held responsible for any direct or indirect
        pecuniary-nonpecuniary damages which may arise from the utilization of the site.</p>
      <p>These conditions take effect as from the moment the User starts to use the website
        www.yunusaydin.net.</p>
      <p>Site Owner has the right to change these conditions at any time.</p>
      <p>Copyright(c) www.yunusaydin.net</p>
      <p>All usage and content rights of the website www.yunusaydin.net are reserved. All rights of the
        website
        belong to Site Owner. Unauthorized use is prohibited by law.</p>
      <p><strong>Related Courts:</strong></p>
      <p>Dispute of any nature that may arise by entering or using this site is subjected to the laws of the
        Republic of Turkey; Istanbul Courts are authorized solely in the settlement of disputes.</p>
      <p><strong>Contact:</strong></p>
      <p><strong>E-Mail:</strong> <a :href="`mailto:${$root.profileInfo.email}`" v-b-tooltip.hover title="Message Me">{{ $root.profileInfo.email }}</a></p>
    </div>
    <b-button variant="primary" block @click="$bvModal.hide('TermsAndConditionsModal')">CLOSE</b-button>
  </b-modal>
</template>

<script>
export default {
  name: 'TermsAndConditions'
};
</script>

<style scoped>
</style>