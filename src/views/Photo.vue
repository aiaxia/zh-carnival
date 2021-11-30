<template>
    <div class="photo">
        <van-nav-bar
            title="拍照"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-field name="uploader" label="拍照">
        <template #input>
            <van-uploader v-model="uploader" :after-read="afterRead" />
        </template>
        </van-field>
    </div>
</template>

<script>
// @ is an alias to /src
import { Field, Uploader, NavBar } from 'vant';

export default {
    name: 'Photo',
    components: {
        [Field.name]: Field,
        [Uploader.name]: Uploader,
        [NavBar.name]: NavBar,
    },
    data(){
        return {
            // uploader: '',
            uploader:  [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }]
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push("/");
        },
        afterRead(file) {
        file.status = 'uploading';
        file.message = '上传中...';
        console.log('file',file)
        // this.uploader = [{url: file.content}]
        // console.log('this.uploader',this.uploader)
        setTimeout(() => {
            file.status = 'failed';
            file.message = '上传失败';
        }, 1000);
        },
    },
}
</script>
