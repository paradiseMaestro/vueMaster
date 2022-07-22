// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
    data() {
      return {
        activeIndex: 0, // то, что позволяет определить текущий активный шаг
        clickButton: 'Вперед',
        textButton: {
          nextUp: 'Вперед',
          finish: 'Закончить',
          startOver: 'Начать заново'
        },
        finish: 'Закончить',
        startOver: 'Начать заново',
        isDisableBack: true,
        isLastStep: false,
        steps: [
          {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
          {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
          {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
          {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
          {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
        ]
      }
    },
    methods: {
      prev() {
        this.activeIndex--
        if (this.activeIndex === 3) {
          this.clickButton = this.textButton.nextUp
        }
      },
      reset() {
        this.activeIndex = 0
        this.clickButton = this.textButton.nextUp
        console.log('reset')
      },
      nextOfFinish() {
        if (this.activeIndex === 3) {
          this.clickButton = this.textButton.finish
          console.log('finish')
        }
  
        if (this.activeIndex === 4) {
          if (this.clickButton !== this.textButton.startOver) {
            this.clickButton = this.textButton.startOver
            console.log('end')
          }
  
        }
  
        if (this.activeIndex !== 4 ) {
          this.activeIndex++
        }
      },
      setActive(idx) {
        this.activeIndex = idx
  
        if (this.activeIndex === 4) {
          this.clickButton = this.textButton.finish
        } else {
          this.clickButton = this.textButton.nextUp
        }
  
      }
    },
    computed: {
      disableBack() {
        this.activeIndex === 0  ? this.isDisableBack = true : this.isDisableBack = false
        return this.isDisableBack
      },
      lastStep(event) {
        if (this.activeIndex === 4) {
          this.isLastStep = true
        } else this.isLastStep = false
      },
  
    }
  }
  
  Vue.createApp(App).mount('#app')
  