<template>
  <va-input
    v-model="email"
    type="email"
    label="Email"
    class="mr-4 mb-4"
  />
  <va-input
    v-model="password"
    type="password"
    label="Password"
    class="mr-4 mb-4"
  />
  <va-input
    v-model="password"
    :type="isPasswordVisible ? 'text' : 'password'"
    label="Password with toggle"
    class="mr-4 mb-4"
  >
    <template #appendInner>
      <va-icon
        :name="isPasswordVisible ? 'visibility_off' : 'visibility'"
        size="small"
        color="--va-primary"
        @click="isPasswordVisible = !isPasswordVisible"
      />
    </template>
  </va-input>
  <va-input
    v-model="phone"
    type="tel"
    label="Phone number"
    class="mr-4 mb-4"
  />
  <va-input
    v-model="search"
    type="search"
    label="Search"
    clearable
    class="mr-4 mb-4"
  />
  <va-input
    v-model="url"
    type="url"
    label="url"
    class="mr-4 mb-4"
  />
</template>

<script>
export default {
  name: 'Types',

  data: () => ({
    isPasswordVisible: false,
    email: '',
    password: '',
    phone: '',
    search: '',
    url: '',
  }),
}
</script>
