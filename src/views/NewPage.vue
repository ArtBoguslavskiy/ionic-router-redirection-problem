<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Page for test</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Page for test</ion-title>
        </ion-toolbar>
      </ion-header>
      <div>Link 1 Page</div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>
