<template>
    <div class="note-publish">
        <div class="editor">
            <QuillEditor 
                theme="snow" 
                placeholder="输入日记内容"
                v-model="state.content" 
                contentType="html"
            />
        </div>

        <div class="note-wrapper">
            <div class="note-cell">
                <van-field v-model="value" label="标题" placeholder="请输入标题" />
            </div>
            
            <div class="note-cell">
                <van-field label="上传图片">
                    <template #input>
                      <van-uploader 
                        v-model="state.img"
                        :after-read="afterRead"
                        maxCount="1"
                      />
                    </template>
                </van-field>
            </div>

            <div class="note-cell">
                <div class="sort" @click="state.sortShow = true">
                    <span>选择分类</span>
                    <span>{{state.note_type}} <van-icon name="arrow" /></span>
                </div>
                <van-action-sheet 
                    v-model:show="state.sortShow" 
                    :actions="actions" 
                    @select="onSelect" 
                />
            </div>
        </div>

        <div class="btn">
            <van-button type="primary" block @click="notePublish">发布日记</van-button>
        </div>
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { reactive } from 'vue';
import axios from '@/api'

const state = reactive({
    content: '',
    img: [],
    sortShow: false,
    note_type: '美食',
})

const actions = [
    { name: '美食' },
    { name: '旅行' },
    { name: '恋爱' },
    { name: '学习' },
    { name: '其他' }
]

const onSelect = (item) => {
    state.sortShow = false
    state.note_type = item.name
}

const afterRead = () => {
    console.log(state.img)
}

const notePublish = () => {
    axios.post('/notePublish', {
        title: state.title,
        note_type: state.note_type,
        head_img: state.img.length ? state.img[0].content : '',
        note_content: state.content,
        nickname: JSON.parse(localStorage.getItem('userInfo')).nickname
    }).then(res => {
        console.log(res);
    })
}
</script>

<style lang="less" scoped>
.note-publish{
    min-height: 100vh;

    :deep(.ql-container){
        height: 200px;
    }

    .note-cell {
        border-bottom: 1px solid #d1d5db;
        .sort{
            display: flex;
            justify-content: space-between;
            line-height: 3;
            padding: 10px 16px;
            font-size: 14px;
            color: #323233;
        }
    }

    .btn{
        width: 80%;
        margin: 0 auto;
        margin-top: 2rem;
    }
}
</style>