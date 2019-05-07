<template>
    <div class="container">
      <p>下面将会显示SlotElem的内容</p>
      <slot message="子组件的数据">
        插槽占位符
      </slot>
      <header>
        <slot name="header">
          页头位置
        </slot>
      </header>
      <main>
        <slot name="main">
          主内容位置
        </slot>
      </main>
      <footer>
        <slot name="footer">
          页脚位置
        </slot>
      </footer>
    </div>
</template>

<script>
    import Slot from "./Slot";
    export default {
        name: "SlotElem",
      components: {Slot}
    }
</script>

<style scoped>
  .container{
    border: 1px solid red;
    width: 300px;
    height: 350px;
    margin: 0 auto;
  }
</style>
