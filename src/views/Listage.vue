<template>
  <div>
    <h2>Liste des visiteurs</h2>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Nombre de jours</th>
          <th>Tarif journalier</th>
          <th>Tarif total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="visitor in visitors" :key="visitor.id_visiteur">
          <td v-if="!visitor.editing">{{ visitor.nom }}</td>
          <td v-else><input v-model="visitor.edit_nom"></td>
          
          <td v-if="!visitor.editing">{{ visitor.nombre_jours }}</td>
          <td v-else><input v-model="visitor.edit_nombre_jours" type="number"></td>
          
          <td v-if="!visitor.editing">{{ visitor.tarif_journalier }}</td>
          <td v-else><input v-model="visitor.edit_tarif_journalier" type="number" step="0.01"></td>
          
          <td>{{ visitor.tarif }}</td>
          
          <td>
            <button v-if="!visitor.editing" @click="startEdit(visitor)">Modifier</button>
            <button v-else @click="saveEdit(visitor)">Sauvegarder</button>
            <button v-if="!visitor.editing" @click="deleteVisitor(visitor.id_visiteur)">Supprimer</button>
            <button v-else @click="cancelEdit(visitor)">Annuler</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="message">{{ message }}</div>
  </div>
</template>