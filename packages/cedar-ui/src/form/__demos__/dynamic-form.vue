<template>
  <c-form :model="form" :style="{ width: '600px' }">
    <c-form-item field="name" label="Username">
      <c-input v-model="form.name" placeholder="please enter your username..." />
    </c-form-item>
    <c-form-item
      v-for="(post, index) of form.posts"
      :field="`posts[${index}].value`"
      :label="`Post-${index}`"
      :key="index"
    >
      <c-input v-model="post.value" placeholder="please enter your post..." />
      <c-button @click="handleDelete(index)" :style="{ marginLeft: '10px' }">Delete</c-button>
    </c-form-item>
  </c-form>
  <div>
    <c-button @click="handleAdd">Add Post</c-button>
  </div>
  {{ form }}
</template>
<script lang="ts">
import { reactive, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const form = reactive({
      name: '',
      posts: [{ value: '' }],
    })
    const handleAdd = () => {
      form.posts.push({
        value: '',
      })
    }
    const handleDelete = (index) => {
      form.posts.splice(index, 1)
    }

    return {
      form,
      handleAdd,
      handleDelete,
    }
  },
})
</script>
