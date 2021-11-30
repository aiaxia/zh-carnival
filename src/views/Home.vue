<template>
  <div class="home">
    <van-grid>
      <van-grid-item icon="photo-o" ><router-link to='/photo'>拍照</router-link></van-grid-item>
      <van-grid-item icon="photo-o"><router-link to='/hongbao'>红包</router-link></van-grid-item>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script>
// @ is an alias to /src
import { Grid, GridItem } from 'vant';

export default {
  name: 'Home',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
  data(){
    return {
    }
  },
  methods: {
    
  },
}
</script>
