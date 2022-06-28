<template>
  <div class="file">
    <div class="file-line">
      <div class="file-content">
        <div class="file-move-on"></div>
        <span class="file-page-counter"> 目前共计 86 篇日志。 继续努力。 </span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.file {
  width: 100%;
  padding: 50px 0 40px 0;
  // height: 100%;
  &-line {
    margin: 0px 55px;
    border-left: 4px solid #f5f5f5;
    // height: 100%;
    // position: absolute;
  }
  &-content {
    // padding: 0px 55px;
    position: relative;
    top: -12px;
    left: -10px;
    font-size: 18px;
  }
  &-move-on {
    display: inline-block;
    width: 16px;
    height: 16px;
    opacity: 0.5;
    background: #555;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  &-page-counter {
    margin-left: 10px;
  }
}
</style>
