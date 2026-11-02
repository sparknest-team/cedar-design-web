<template>
  <c-form :model="form" :style="{ width: '600px' }">
    <c-form-item
      label="Username"
      :content-flex="false"
      :merge-props="false"
      extra="Show error message together"
    >
      <c-row :gutter="8">
        <c-col :span="12">
          <c-form-item
            field="together.firstname"
            validate-trigger="input"
            :rules="[{ required: true, message: 'firstname is required' }]"
            no-style
          >
            <c-input
              v-model="form.together.firstname"
              placeholder="please enter your firstname..."
            />
          </c-form-item>
        </c-col>
        <c-col :span="12">
          <c-form-item
            field="together.lastname"
            validate-trigger="input"
            :rules="[{ required: true, message: 'lastname is required' }]"
            no-style
          >
            <c-input
              v-model="form.together.lastname"
              placeholder="please enter your lastname..."
            />
          </c-form-item>
        </c-col>
      </c-row>
    </c-form-item>
    <c-form-item label="Username" :content-flex="false" :merge-props="false">
      <c-row :gutter="8">
        <c-col :span="12">
          <c-form-item
            field="separate.firstname"
            validate-trigger="input"
            extra="Show error message separate"
            :rules="[{ required: true, message: 'firstname is required' }]"
            hide-label
          >
            <c-input
              v-model="form.separate.firstname"
              placeholder="please enter your firstname..."
            />
          </c-form-item>
        </c-col>
        <c-col :span="12">
          <c-form-item
            field="separate.lastname"
            validate-trigger="input"
            :rules="[{ required: true, message: 'lastname is required' }]"
            hide-label
          >
            <c-input
              v-model="form.separate.lastname"
              placeholder="please enter your lastname..."
            />
          </c-form-item>
        </c-col>
      </c-row>
    </c-form-item>
    <c-form-item label="Posts" :content-flex="false" :merge-props="false">
      <c-space direction="column" align="stretch">
        <c-form-item field="posts.post1" label="Post1">
          <c-input
            v-model="form.posts.post1"
            placeholder="please enter your post..."
          />
        </c-form-item>
        <c-form-item field="posts.post2" label="Post2">
          <c-input
            v-model="form.posts.post2"
            placeholder="please enter your post..."
          />
        </c-form-item>
      </c-space>
    </c-form-item>
    <c-form-item field="isRead">
      <c-checkbox v-model="form.isRead"> I have read the manual </c-checkbox>
    </c-form-item>
  </c-form>
  {{ form }}
</template>
<script lang="ts">
import { reactive, ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const form = reactive({
      together: {
        firstname: "",
        lastname: "",
      },
      separate: {
        firstname: "",
        lastname: "",
      },
      posts: {
        post1: "",
        post2: "",
      },
      isRead: false,
    });

    return {
      form,
    };
  },
});
</script>
