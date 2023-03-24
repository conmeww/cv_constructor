<template>

<TrelloBoard1 />
</template>
<script>
import MainHeader from "./MainHeader";

import TrelloBoard1 from "./draggable/Container";

export default {
  components: {TrelloBoard1, MainHeader}
}
</script>