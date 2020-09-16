<template>
  <form id="form" action>
    <div>
      <label class="visuallyhidden" for="Full Name">Full name:</label>
      <input
        name="Full Name"
        v-model="name"
        type="text"
        aria-label="Full Name"
        placeholder="Name"
        autofocus
        required
      />
    </div>
    <div>
      <label class="visuallyhidden" for="Email Address">Serch:</label>
      <input
        name="Email Address"
        v-model="emailAddress"
        aria-label="email"
        type="email"
        placeholder="Email Address"
        required
      />
    </div>
    <div>
      <label class="visuallyhidden" for="password">Password:</label>
      <input
        name="Password"
        @input="checkPassword"
        v-model="password"
        type="password"
        aria-label="password"
        required
        placeholder="Password"
      />
    </div>
    <div class="card__form__meter">
      
      <div class="card__form__meter--container" :class="password_warning.class">{{password_warning.warning}}</div>
      <meter min="0" max="100" :value="meter" low="26" high="51" optimum="75"></meter>
      <span>
        Your password should be <span :class="{ valid : contains_enoughchars }">at least 8 characters</span>, and 3 of the following:
     </span>
      <ul>
        <li>
          <span class="material-icons" v-bind:class="{ valid : contains_lowercase }">check_circle</span>Lowercase characters
        </li>
        <li>
          <span class="material-icons" v-bind:class="{ valid : contains_uppercase }">check_circle</span>Uppercase characters
        </li>
        <li>
          <span class="material-icons" v-bind:class="{ valid : contains_number }">check_circle</span>Numbers
        </li>
        <li>
          <span class="material-icons" v-bind:class="{ valid : contains_special }">check_circle</span>Special characters
        </li>
      </ul>
    </div>
    <div class="form__checkbox">
      <input
        type="checkbox"
        name="Marketing OptIn"
        v-model="marketing_optin"
        aria-label="checkbox"
        id="checkbox"
      />
      <label for="checkbox">
        Keep me informed of special offers, product updates, and
        information relevant to me.
      </label>
    </div>
    <button role="button" type="submit" title="Create your account">Create your account</button>

    <p>
      By creating your account you agree to the
      <a href="#">terms & conditions</a> and
      <a href="#">privacy notice</a>.
    </p>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      name: null,
      emailAddress: null,
      password: null,
      meter: 0,
      meter_status: null,
      password_length: 0,
      password_class: "",
      password_strength: "",
      contains_enoughchars: false,
      contains_uppercase: false,
      contains_lowercase: false,
      contains_number: false,
      contains_special: false,
      marketing_optin: false,
    };
  },
  methods: {
    checkPassword() {
        //Set password length and regex special chars properties
      this.password_length = this.password.length;
      const specialChars = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
        //Check to see if password is long enough and set flag if true
      if (this.password_length > 8) {
        this.contains_enoughchars = true;
      } else {
        this.contains_enoughchars = false;
      }
        //Check password against regex and check if contains correct criteia
      this.contains_lowercase = /[a-z]/.test(this.password);
      this.contains_number = /\d/.test(this.password);
      this.contains_uppercase = /[A-Z]/.test(this.password);
      this.contains_special = specialChars.test(this.password);
        //Loop through and increment meter for each true criteria
      let strength = 0;
      const fn = [
        this.contains_lowercase,
        this.contains_number,
        this.contains_uppercase,
        this.contains_special,
      ];

      fn.forEach((f) => {
        if (f) {
          strength += 25;
        }
      });

      this.meter = strength;
    },
  },
  computed: {
      // Check condition of meter strength and set the bound element accordingly
    password_warning: function () {
      if (this.meter == 0) {
        return {
          warning: "Strong password required",
          class: "card__form__meter__warning",
        };
      } else if (this.meter == 25) {
        return { 
            warning: "Very weak (not strong enough)", 
            class: "very-weak" };
      } else if (this.meter == 50) {
        return { 
            warning: "Weak (not strong enough)", 
            class: "weak" };
      } else if (this.meter == 75) {
        return { 
            warning: "Strong", 
            class: "strong" };
      } else {
        return { 
            warning: "Very strong", 
            class: "strong" };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$brand-navy: #212630;
$white: #fff;
$violet-red: #F32F84;
$turquoise: #0bc9eb;
$light-blue: #2FA4F3;
$dark-grey: #212630;
$red: #d44152;
$orange: #cf863d;
$green: #25CB41;
$light-grey: #ddd;
$lighter-grey: #c9c9c9;

form {
  display: flex;
  flex-direction: column;

  .card__form__meter__warning {
    font-size: 0.75rem;
  }
  .card__form__meter--container {
    margin :0;
    font-size: 0.75rem;

  }
}

a {
  color: $violet-red;
  font-weight: 500;
}

div,
p {
  margin: 1rem 0;
}

input {
  border: 1px solid $light-grey;
  border-radius: 8px;
  color: $dark-grey;
  padding: 1rem;
  width: 100%;
  &:hover {
    border: 1px solid rgba($violet-red, 41%);
  }
  &:focus {
    border: 1px solid rgba($violet-red, 41%);
    outline: none; /*Disabled default focus for sake of example */
  }
}

meter {
  width: 100%;
  height: 10px;
  margin: 1rem 0 1rem 0;
}

.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

ul {
  list-style-type: none;
  margin-top: 1rem;
}

ul li {
  display: flex;
  align-items: center;

  .material-icons {
    color: #23466b0d;
  }
}

li span {
  margin-right: 0.75rem;
}

.form__checkbox {
  display: flex;
  align-items: baseline;

  input[type="checkbox"] {
    width: auto;
    margin-right: 5px;
    border: 1px solid $lighter-grey;
    // transform : scale(1.5)
  }
}

button {
  padding: 1.5rem;
  background-color: $violet-red;
  color:$white;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin: auto;
  &:hover {
    background: darken( $violet-red, 10% );
    cursor: pointer;
  }
}
button + p {
  margin: 1rem auto;
}

.valid,
.strong {
  color: $green !important;
}

.very-weak {
  color: $red;
}

.weak {
  color: $orange;
}

@media (min-width: 768px) {
  .card button,
  .card button + p {
    width: 324px;
    text-align: center;
  }
}
</style>