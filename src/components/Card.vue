<template>
  <div>
    <div class="card">
      <h2 class="card__title">Create your account</h2>
      <p>
        Already have an account?
        <a href="/">Log in</a>
      </p>
      <Form />
    </div>
    
  </div>
</template>

<script>
import Form from "./Form.vue";

export default {
  name: "Card",
  components: {
    Form,
  },
};
</script>


<style lang="scss" scoped>

$brand-navy: #2e333b;
$white: #fff;
$turquoise: #0bc9eb;
$light-blue: #2D2D2D;
$violet-red: #F32F84;

$dark-blue: #23466b;
$red: #d6031c;
$orange: #ff7f00;
$green: #2ba230;
$light-grey: #ddd;
$lighter-grey: #c9c9c9;

.card {
        margin:auto;
        max-width: 620px;
        border-radius: 8px;
        box-shadow: 0 8px 42px rgba(79, 81, 83, 0.2);
        color:$light-blue;
        padding: 2rem;
        font-weight: 300;

    .card__title {
        font-weight: 500;
    }
    h2 {
        color:$light-blue
    }
    p {
        margin: 1rem 0;
    }

    a {
        color: $violet-red;
        font-weight: 500;
}
}

.card + a {
        margin-top: 1rem;
        color: $violet-red;
        text-align: center;
        display: block;
    }
</style>
