<template>
    <ul class="social-media-list is-size-4">
        <li class="is-inline-block mx-2 wh-40px">
            <a class="block is-flex is-justify-content-center is-align-items-center	is-full-hw">
                <font-awesome-icon class="is-block color-facebook" :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/>
            </a>
        </li>
        <li class="is-inline-block mx-2 wh-40px">
            <a class="block is-flex is-justify-content-center is-align-items-center	is-full-hw">
                <font-awesome-icon class="is-block color-twitter" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
            </a>
        </li>
        <li class="is-inline-block mx-2 wh-40px">
            <a class="block is-flex is-justify-content-center is-align-items-center	is-full-hw">
                <font-awesome-icon class="is-block color-github" :icon="{ prefix: 'fab', iconName: 'github' }"/>
            </a>
        </li>
        <li class="is-inline-block mx-2 wh-40px">
            <a class="block is-flex is-justify-content-center is-align-items-center	is-full-hw">
                <font-awesome-icon class="is-block color-linkedin" :icon="{ prefix: 'fab', iconName: 'linkedin-in' }"/>
            </a>
        </li>
    </ul>
</template>

<script>

export default {
    name: "SocialMedia.vue"
}
</script>

<style lang="scss" scoped>
.social-media-list {
    li {
        background-color: #ffffff;
        border-radius: 100%;

        &:hover {
            background-color: #cccccc;
        }
    }
}
    .wh-40px {
        width: 40px;
        height: 40px;
    }

    .is-full-hw {
        width: 100%;
        height: 100%
    }

    .color-facebook {
        color: #4267B2;
    }

    .color-twitter {
        color: #1DA1F2;
    }

    .color-linkedin {
        color: #0077b5;
    }

    .color-github {
        color: #4078c0;
    }
</style>