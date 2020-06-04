<template>
  <v-footer
    fixed
    width="100%"
  >
    <v-text-field
      label="Comentar..."
      single-line
      solo
      append-icon="send"
      color="oficial"
    >
      <template v-slot:append>
        <v-btn
          icon
          tile
          small
          type="submit"
        >
          <v-icon>
            mdi-send
          </v-icon>
        </v-btn>
      </template>
    </v-text-field>
  </v-footer>
</template>

<script>
  export default {
    name: 'PagesCoreFooter',

    data: () => ({
    }),
  }
</script>

<style lang="sass">
  #coments-core-footer
    a
      color: #FFFFFF
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase

  .v-footer
            position: fixed !important
            padding: 0px 0px 0px 0px
            bottom: 0
            width: 100%
            height: 49px
            background: grey
</style>
