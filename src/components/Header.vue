<template>
  <header>
    <nav>
      <div class="header-nav__container">
        <a class="header-nav__logo-link" title="Deuce" href="/">
          <img src="../assets/deuce.svg" alt="Acme" />
        </a>
        <ul role="menubar" class="header-nav__links">
          <li role="menuitem" class="header-nav__admin-phone">
            <a class="header-nav__admin-phone-number" href="#">Home</a>
          </li>
          <li role="menuitem" class="header-nav__support-phone">
            <a class="header-nav__support-phone-number" href="#">About</a>
          </li>
          <li role="menuitem" class="header-nav__support-phone">
            <a class="header-nav__support-phone-number" href="#">Services</a>
          </li>

        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>

$brand-navy: #2D2D2D;
$white: #fff;
$yellow: #ebc20b;
$light-blue: #2FA4F3;
$dark-blue: #212630;
$violet-red: #F32F84;
$red: #d6031c;
$orange: #ff7f00;
$green: #2ba230;
$light-grey: #ddd;
$lighter-grey: #c9c9c9;

nav {
    display: flex;
    height: 76px;
    background-color: $brand-navy;

    .header-nav__container {
        margin: auto;
        width:100%;
        max-width: 1280px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5rem;
    }
    .header-nav__links
    {
        display: none;
    }

    .header-nav__admin-phone {
        color: $white;
        list-style-type: none;

        a {
            color: $white;
            margin-left: 5px;
            text-decoration: none;
        }
    }
    .header-nav__support-phone {
       @extend .header-nav__admin-phone;
       margin-left:41px
    }
}

@media (min-width: 768px) {
  .header-nav__container {
    max-width: 768px;
  }

  nav .header-nav__links {
    display: flex;
  }
}
</style>
