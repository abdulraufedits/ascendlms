<template>
    <div class="flex w-full items-start gap-x-2">
        <span class=" rounded-lg min-h-10 min-w-10 grid place-content-center bg-gray-200">
            <ion-icon :name="activityIcon" class="text-gray-700"></ion-icon>
        </span>
        <div>
            <label for="{{username}}" class="font-small"><b>{{username}}</b> {{ activityVerb }} <b>{{ activityObj }}</b></label>
            <span class="flex gap-x-1 mt-1">
                <ion-icon class="text-gray-400 text-lg" name="calendar-clear-outline"></ion-icon>
                <time class="subtitle" datetime="{{date}}">{{ date }}</time>
                <span class=" size-1 bg-gray-400 rounded-full my-auto"></span>
                <time class="subtitle" datetime="{{ date }}">{{ time }}</time>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            default: "Unknown"
        },
        activityIcon: {
            type: String,
            default: "clipboard"
        },
        activityVerb: {
            type: String,
            default: "has submitted an"
        },
        activityObj: {
            type: String,
            default: "Assignment"
        },
        date: {
            type: String,
            default: "March 12, 2024"
        },
        time: {
            type: String,
            default: "10:12 PM"
        }
    }
}
</script>