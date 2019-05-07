<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
      插槽
      <div>
        <SlotElem>

          <div class="noNameSlotClass" slot-scope="slotProps">
            I am a no name slot
            <br/>
            {{slotProps.message}}
          </div>


          <template v-slot:header>
            <div class="namedSotClass">
              I am a header slot
            </div>
          </template>
          <template v-slot:main>
            <div class="namedSotClass">
              I am a main slot
            </div>
          </template>
          <template v-slot:footer>
            <div class="namedSotClass">
              I am a footer slot
            </div>
          </template>

        </SlotElem>
      </div>
    </div>
</template>

<script>
    import SlotElem from "./SlotElem";
    export default {
      name: "Slot",
      components: {SlotElem}
    }
</script>

<style scoped>
  .noNameSlotClass{
    border: 1px solid #ff4d7d;
    width: 200px;
    height: 100px;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
    background-color: #ceccd2;
  }
  .namedSotClass{
    border: 1px solid blue;
    width: 200px;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
    background-color: chocolate;
  }
</style>
