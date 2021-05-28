<template>

</template>

<script lang="ts">
import TimeSlot from "../../ts/timeSlot";
import {reactive} from "vue";
import axios from "axios";
import {url} from "../../ts/strings";
import Result from "../../ts/result";

export default {
  name: "QueryProvidedCourses",
  setup() {
    const providedSections = reactive<Section[]>([]);
    const id = localStorage.getItem('ID');

    axios.get(url + '/teacher/queryProvidedCourses', {
      params: {
        id
      }
    }).then((response) => {
      const result: Result = response.data;

      result.data.sections.forEach((courseId: string, secId: string,
                                    semester: string, year: number, building: string,
                                    roomNumber: string, maxCapacity: number,
                                    timeSlots: TimeSlot[]) => {
        providedSections.push({
          courseId, secId, semester, year, building,
          roomNumber, maxCapacity, timeSlots
        })
      });
    });

    return {providedSections}
  }
}

interface Section {
  courseId: string;
  secId: string;
  semester: string;
  year: number;
  building: string;
  roomNumber: string;
  maxCapacity: number;
  timeSlots: TimeSlot[];
}
</script>

<style scoped>

</style>