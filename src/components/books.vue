<template>
  <div class="books">
    <button @click="addBook" :disabled="addDisabled">Add Book</button>

    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} with price: {{ book.price }}.
        <button @click="deleteBook(book)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Books',
  data () {
    return {
      addDisabled: false
    }
  },
  computed: {
    books () {
      return this.$store.state.books
    }
  },
  created () {
    this.getBooks()
  },
  methods: {
    ...mapActions(['getBooks', 'addBookToDb']),
    async addBook () {
      this.addDisabled = true
      // random book for now
      const book = {
          idSystem: "11111",
          indicator: "LUCRO",
          parameter: "NATALIDADE",
          valueParameter: 0.130,
          valueIndicator: 111
      }     

      console.log('about to add ' + JSON.stringify(book))
      await this.addBookToDb({ book })
      this.getBooks()
      this.addDisabled = false
    },

    async deleteBook (book) {
      await this.$store.dispatch('deleteBookFromDb', { book })
      this.getBooks()
    }

  }

}
</script>