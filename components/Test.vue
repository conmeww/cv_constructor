<script setup>

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


let animals = ['Columsdfgthyjkljuyhn 1', 'Column 2', 'Columasdfgthkljhgfrn 3', 'Column 4']
let vall = ref('')

let pdf
let k = ref()

async function exportPdf() {

  console.log(pdfFonts)
  let docDefinition = {
    content: [
      {
        // header
        columns: [
          {
            text: 'photo',
            width: '20%'
          },
          {
            stack: [
              {
                text: 'Chris Candidate',
                fontSize: 18,
                bold: true
              },
              {
                text: 'Human Resource Manger',
                fontSize: 16,
                bold: true
              },
            ],
            alignment: 'left',
            width: '*',

          }, {
            stack: [
              {
                columns: [
                  {
                    svg: '<svg width="10" height="10" viewBox="0 0 10 10">  <circle cx="5" cy="5" r="10" stroke="green" stroke-width="4" fill="yellow" /></svg>'
                  },
                  {
                    text: '4759 Sunnydale Lane',
                    width: '*'
                  },
                ],
                alignment: 'right',
                columnGap: 0
              },
              {
                columns: [
                  {
                    svg: '<svg width="10" height="10" viewBox="0 0 10 10">  <circle cx="5" cy="5" r="10" stroke="green" stroke-width="4" fill="yellow" /></svg>'
                  },
                  {
                    text: '4759 Sunnydale Lane',
                    width: '*'
                  },
                ],
                alignment: 'right',
                columnGap: 0
              },
              {
                columns: [
                  {
                    svg: '<svg width="10" height="10" viewBox="0 0 10 10">  <circle cx="5" cy="5" r="10" stroke="green" stroke-width="4" fill="yellow" /></svg>'
                  },
                  {
                    text: '4759 Sunnydale Lane',
                    width: '*'
                  },
                ],
                alignment: 'right',
                columnGap: 0
              },
              {
                columns: [
                  {
                    svg: '<svg width="10" height="10" viewBox="0 0 10 10">  <circle cx="5" cy="5" r="10" stroke="green" stroke-width="4" fill="yellow" /></svg>'
                  },
                  {
                    text: '4759 Sunnydale Lane',
                    width: '*'
                  },
                ],
                alignment: 'right',
                columnGap: 0
              },
            ],
            style: 'headerRight',
            width: '40%',
            alignment: 'right',
            fontSize:10,
            margin: [0, 0, 0, 30],
          },
            

        ]
      },
// summary


      // experience
      {
        columns: [
          {
            width: '30%',
            text: 'Professional Experience'
          },
          {
            width: '*',
            text: 'Professional Experience Title',
            alignment: 'right',
            stack: [


              {
                text: 'Human Resource',
                fontSize: 15,
              },
              {
                text: 'Jim\'s Widget Factory, Plano, TX | January 2016 - Present',
                fontSize: 12,
                margin: [0, 0, 0, 10]
              },
              {

                ul: [
                  {
                    text: 'Implement effective company policies to ensure that all practices comply with labor and employment regulations',
                    margin: [0, 0, 0, 10]
                  },
                  {
                    text: 'Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment',
                    margin: [0, 0, 0, 10]

                  },
                  {
                    text: '  Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies',
                    margin: [0, 0, 0, 10]


                  },

                ],
                fontSize: 10,
              },
              {
                text: 'Human Resource',
                fontSize: 15,
              },
              {
                text: 'Jim\'s Widget Factory, Plano, TX | January 2016 - Present',
                fontSize: 12,
                margin: [0, 0, 0, 10]
              },
              {

                ul: [
                  {
                    text: 'Implement effective company policies to ensure that all practices comply with labor and employment regulations',
                    margin: [0, 0, 0, 10]
                  },
                  {
                    text: 'Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment',
                    margin: [0, 0, 0, 10]

                  },
                  {
                    text: '  Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies',
                    margin: [0, 0, 0, 10]


                  },

                ],
                fontSize: 10,
              },

            ],
          },

        ]
      },
      // education
      {
        columns: [
          {
            width: '30%',
            text: 'Professional Experience'
          },
          {
            width: '*',
            text: 'Professional Experience Title',
            alignment: 'right',
            stack: [


              {
                text: 'Human Resource',
                fontSize: 15,
              },
              {
                text: 'Jim\'s Widget Factory, Plano, TX | January 2016 - Present',
                fontSize: 12,
                margin: [0, 0, 0, 10]
              },
              {

                ul: [
                  {
                    text: 'Implement effective company policies to ensure that all practices comply with labor and employment regulations',
                    margin: [0, 0, 0, 10]
                  },
                  {
                    text: 'Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment',
                    margin: [0, 0, 0, 10]

                  },
                  {
                    text: '  Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies',
                    margin: [0, 0, 0, 10]


                  },

                ],
                fontSize: 10,
              },
              {
                text: 'Human Resource',
                fontSize: 15,
              },
              {
                text: 'Jim\'s Widget Factory, Plano, TX | January 2016 - Present',
                fontSize: 12,
                margin: [0, 0, 0, 10]
              },
              {

                ul: [
                  {
                    text: 'Implement effective company policies to ensure that all practices comply with labor and employment regulations',
                    margin: [0, 0, 0, 10]
                  },
                  {
                    text: 'Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment',
                    margin: [0, 0, 0, 10]

                  },
                  {
                    text: '  Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies',
                    margin: [0, 0, 0, 10]


                  },

                ],
                fontSize: 10,
              },

            ],
          },

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
      },
      headerRight: {},
    },
    defaultStyle: {

      columnGap: 10,

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