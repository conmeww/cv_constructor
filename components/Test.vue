<script setup>

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


let animals = ['Columsdfgthyjkljuyhn 1', 'Column 2', 'Columasdfgthkljhgfrn 3', 'Column 4']
let vall = ref('')

let pdf
let k = ref()

async function exportPdf() {
  let docDefinition = {

    content: [

      {
        alignment: 'justify',
        columns: [
          {
            stack: [
              {
                text: [
                  'This line begins a stack of paragraphs. The whole stack uses a ',
                  {text: 'superMargin', italics: true},
                  ' style (with margin and fontSize properties).',
                ]
              },
              {
                text: ['When you look at the', {
                  text: ' document definition',
                  italics: true
                }, ', you will notice that fontSize is inherited by all paragraphs inside the stack.']
              },
              'Margin however is only applied once (to the whole stack).'
            ],
            width: 100,
          },
          {
            text: 'column 2 efsrdghjklhjgf' +
                'desadfrgthjkl;kjhygfrdwsdfhkl;',
            background: 'red'
          },
          {
            text: vall.value,

          }
        ]
      },

      {
        columns: [
          {
            text: 'Loiveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            text: 'Lorveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            text: 'Loremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          }
        ]
      },
      '\nYou can also specify accurate widths for some (or all columns). Let\'s make the first column and the last one narrow and let the layout engine divide remaining space equally between other star-columns:\n\n',
      {
        columns: [
          {
            width: 90,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            width: '*',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            width: '*',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            width: 90,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          }
        ]
      },
      {
        style: 'bigger',
        columns: [
          'First column (BTW - it\'s defined as a single string value. pdfmake will turn it into appropriate structure automatically and make sure it inherits the styles',
          {
            fontSize: 20,
            text: 'In this column, we\'ve overriden fontSize to 20. It means the content should have italics=true (inherited from the style) and be a little bit bigger',
          },
          {
            style: 'header',
            text: 'Last column does not override any styling properties, but applies a new style (header) to itself. Eventually - texts here have italics=true (from bigger) and derive fontSize from the style. OK, but which one? Both styles define it. As we already know from our styling examples, multiple styles can be applied to the element and their order is important. Because \'header\' style has been set after \'bigger\' its fontSize takes precedence over the fontSize from \'bigger\'. This is how it works. You will find more examples in the unit tests.'
          }
        ]
      },

    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true
      },
      bigger: {
        fontSize: 15,
        italics: true
      }
    },
    defaultStyle: {
      columnGap: 20
    }
  };

  pdf = await pdfMake.createPdf(docDefinition)
  pdf = await pdf.getDataUrl()
      .then(value => {

        return k.value = value

      }).catch(err => {
        console.log(err);
      });
  console.log(k);


}


//  pdf.print()


</script>

<template>

  <input v-model="vall" type="text" @input="exportPdf">
  <button @click="exportPdf()">Pdf</button>
  <div id="my-container" class="ng-scope pdfobject-container">
    <iframe :src="k" height="1000px" style="overflow: auto;" type="application/pdf" width="100%">
    </iframe>
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>