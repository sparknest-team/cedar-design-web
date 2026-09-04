import type { App } from 'vue'
import { IconEmptyDefault } from './icon-empty-default'
import { IconErrorNetwork } from './icon-error-network'
import { IconErrorUnknown } from './icon-error-unknown'
import { IconSuccessSubmitted } from './icon-success-submitted'
import { IconArrowDown } from './icon-arrow-down'
import { IconArrowFall } from './icon-arrow-fall'
import { IconArrowLeft } from './icon-arrow-left'
import { IconArrowRight } from './icon-arrow-right'
import { IconArrowRise } from './icon-arrow-rise'
import { IconArrowUp } from './icon-arrow-up'
import { IconCaretDown } from './icon-caret-down'
import { IconCaretLeft } from './icon-caret-left'
import { IconCaretRight } from './icon-caret-right'
import { IconCaretUp } from './icon-caret-up'
import { IconDoubleDown } from './icon-double-down'
import { IconDoubleLeft } from './icon-double-left'
import { IconDoubleRight } from './icon-double-right'
import { IconDoubleUp } from './icon-double-up'
import { IconDownCircle } from './icon-down-circle'
import { IconDown } from './icon-down'
import { IconDragArrow } from './icon-drag-arrow'
import { IconExpand } from './icon-expand'
import { IconLeftCircle } from './icon-left-circle'
import { IconLeft } from './icon-left'
import { IconMenuFold } from './icon-menu-fold'
import { IconMenuUnfold } from './icon-menu-unfold'
import { IconRightCircle } from './icon-right-circle'
import { IconRight } from './icon-right'
import { IconRotateLeft } from './icon-rotate-left'
import { IconRotateRight } from './icon-rotate-right'
import { IconShrink } from './icon-shrink'
import { IconSwap } from './icon-swap'
import { IconToBottom } from './icon-to-bottom'
import { IconToLeft } from './icon-to-left'
import { IconToRight } from './icon-to-right'
import { IconToTop } from './icon-to-top'
import { IconUpCircle } from './icon-up-circle'
import { IconUp } from './icon-up'
import { IconAlignCenter } from './icon-align-center'
import { IconAlignLeft } from './icon-align-left'
import { IconAlignRight } from './icon-align-right'
import { IconAttachment } from './icon-attachment'
import { IconBackgroundColor } from './icon-background-color'
import { IconBold } from './icon-bold'
import { IconBrush } from './icon-brush'
import { IconCopy } from './icon-copy'
import { IconDelete } from './icon-delete'
import { IconEdit } from './icon-edit'
import { IconEraser } from './icon-eraser'
import { IconFilter } from './icon-filter'
import { IconFindReplace } from './icon-find-replace'
import { IconFontColor } from './icon-font-color'
import { IconFormula } from './icon-formula'
import { IconH1 } from './icon-h1'
import { IconH2 } from './icon-h2'
import { IconH3 } from './icon-h3'
import { IconH4 } from './icon-h4'
import { IconH5 } from './icon-h5'
import { IconH6 } from './icon-h6'
import { IconH7 } from './icon-h7'
import { IconHighlight } from './icon-highlight'
import { IconItalic } from './icon-italic'
import { IconLineHeight } from './icon-line-height'
import { IconLink } from './icon-link'
import { IconObliqueLine } from './icon-oblique-line'
import { IconOrderedList } from './icon-ordered-list'
import { IconOriginalSize } from './icon-original-size'
import { IconPaste } from './icon-paste'
import { IconQuote } from './icon-quote'
import { IconRedo } from './icon-redo'
import { IconScissor } from './icon-scissor'
import { IconSortAscending } from './icon-sort-ascending'
import { IconSortDescending } from './icon-sort-descending'
import { IconSort } from './icon-sort'
import { IconStrikethrough } from './icon-strikethrough'
import { IconUnderline } from './icon-underline'
import { IconUndo } from './icon-undo'
import { IconUnorderedList } from './icon-unordered-list'
import { IconZoomIn } from './icon-zoom-in'
import { IconZoomOut } from './icon-zoom-out'
import { IconChineseFill } from './icon-chinese-fill'
import { IconEnglishFill } from './icon-english-fill'
import { IconFaceFrownFill } from './icon-face-frown-fill'
import { IconFaceMehFill } from './icon-face-meh-fill'
import { IconFaceSmileFill } from './icon-face-smile-fill'
import { IconMoonFill } from './icon-moon-fill'
import { IconPenFill } from './icon-pen-fill'
import { IconSunFill } from './icon-sun-fill'
import { IconApps } from './icon-apps'
import { IconArchive } from './icon-archive'
import { IconBarChart } from './icon-bar-chart'
import { IconBook } from './icon-book'
import { IconBookmark } from './icon-bookmark'
import { IconBranch } from './icon-branch'
import { IconBug } from './icon-bug'
import { IconBulb } from './icon-bulb'
import { IconCalendarClock } from './icon-calendar-clock'
import { IconCalendar } from './icon-calendar'
import { IconCamera } from './icon-camera'
import { IconCloud } from './icon-cloud'
import { IconCommand } from './icon-command'
import { IconCommon } from './icon-common'
import { IconCompass } from './icon-compass'
import { IconComputer } from './icon-computer'
import { IconCopyright } from './icon-copyright'
import { IconDashboard } from './icon-dashboard'
import { IconDesktop } from './icon-desktop'
import { IconDice } from './icon-dice'
import { IconDragDotVertical } from './icon-drag-dot-vertical'
import { IconDragDot } from './icon-drag-dot'
import { IconDriveFile } from './icon-drive-file'
import { IconEar } from './icon-ear'
import { IconEmail } from './icon-email'
import { IconEmpty } from './icon-empty'
import { IconExperiment } from './icon-experiment'
import { IconFileAudio } from './icon-file-audio'
import { IconFileImage } from './icon-file-image'
import { IconFilePdf } from './icon-file-pdf'
import { IconFileVideo } from './icon-file-video'
import { IconFile } from './icon-file'
import { IconFire } from './icon-fire'
import { IconFolderAdd } from './icon-folder-add'
import { IconFolderDelete } from './icon-folder-delete'
import { IconFolder } from './icon-folder'
import { IconGift } from './icon-gift'
import { IconIdCard } from './icon-id-card'
import { IconImageClose } from './icon-image-close'
import { IconImage } from './icon-image'
import { IconInteraction } from './icon-interaction'
import { IconLanguage } from './icon-language'
import { IconLayers } from './icon-layers'
import { IconLayout } from './icon-layout'
import { IconLoading } from './icon-loading'
import { IconLocation } from './icon-location'
import { IconLock } from './icon-lock'
import { IconLoop } from './icon-loop'
import { IconMan } from './icon-man'
import { IconMenu } from './icon-menu'
import { IconMindMapping } from './icon-mind-mapping'
import { IconMobile } from './icon-mobile'
import { IconMoon } from './icon-moon'
import { IconMosaic } from './icon-mosaic'
import { IconNav } from './icon-nav'
import { IconNotificationClose } from './icon-notification-close'
import { IconNotification } from './icon-notification'
import { IconPalette } from './icon-palette'
import { IconPen } from './icon-pen'
import { IconPhone } from './icon-phone'
import { IconPrinter } from './icon-printer'
import { IconPublic } from './icon-public'
import { IconPushpin } from './icon-pushpin'
import { IconQrCode } from './icon-qr-code'
import { IconRelation } from './icon-relation'
import { IconRobotAdd } from './icon-robot-add'
import { IconRobot } from './icon-robot'
import { IconSafe } from './icon-safe'
import { IconSchedule } from './icon-schedule'
import { IconShake } from './icon-shake'
import { IconSkin } from './icon-skin'
import { IconStamp } from './icon-stamp'
import { IconStorage } from './icon-storage'
import { IconSubscribeAdd } from './icon-subscribe-add'
import { IconSubscribe } from './icon-subscribe'
import { IconSubscribed } from './icon-subscribed'
import { IconSun } from './icon-sun'
import { IconTag } from './icon-tag'
import { IconTags } from './icon-tags'
import { IconThunderbolt } from './icon-thunderbolt'
import { IconTool } from './icon-tool'
import { IconTrophy } from './icon-trophy'
import { IconUnlock } from './icon-unlock'
import { IconUserAdd } from './icon-user-add'
import { IconUserGroup } from './icon-user-group'
import { IconUser } from './icon-user'
import { IconVideoCamera } from './icon-video-camera'
import { IconWifi } from './icon-wifi'
import { IconWoman } from './icon-woman'
import { IconHeartFill } from './icon-heart-fill'
import { IconStarFill } from './icon-star-fill'
import { IconThumbDownFill } from './icon-thumb-down-fill'
import { IconThumbUpFill } from './icon-thumb-up-fill'
import { IconAt } from './icon-at'
import { IconCloudDownload } from './icon-cloud-download'
import { IconCodeBlock } from './icon-code-block'
import { IconCodeSquare } from './icon-code-square'
import { IconCode } from './icon-code'
import { IconCustomerService } from './icon-customer-service'
import { IconDownload } from './icon-download'
import { IconExport } from './icon-export'
import { IconEyeInvisible } from './icon-eye-invisible'
import { IconEye } from './icon-eye'
import { IconHeart } from './icon-heart'
import { IconHistory } from './icon-history'
import { IconHome } from './icon-home'
import { IconImport } from './icon-import'
import { IconLaunch } from './icon-launch'
import { IconList } from './icon-list'
import { IconMessageBanned } from './icon-message-banned'
import { IconMessage } from './icon-message'
import { IconMoreVertical } from './icon-more-vertical'
import { IconMore } from './icon-more'
import { IconPoweroff } from './icon-poweroff'
import { IconRefresh } from './icon-refresh'
import { IconReply } from './icon-reply'
import { IconSave } from './icon-save'
import { IconScan } from './icon-scan'
import { IconSearch } from './icon-search'
import { IconSelectAll } from './icon-select-all'
import { IconSend } from './icon-send'
import { IconSettings } from './icon-settings'
import { IconShareAlt } from './icon-share-alt'
import { IconShareExternal } from './icon-share-external'
import { IconShareInternal } from './icon-share-internal'
import { IconStar } from './icon-star'
import { IconSync } from './icon-sync'
import { IconThumbDown } from './icon-thumb-down'
import { IconThumbUp } from './icon-thumb-up'
import { IconTranslate } from './icon-translate'
import { IconUpload } from './icon-upload'
import { IconVoice } from './icon-voice'
import { IconBytedanceColor } from './icon-bytedance-color'
import { IconLarkColor } from './icon-lark-color'
import { IconTiktokColor } from './icon-tiktok-color'
import { IconXiguaColor } from './icon-xigua-color'
import { IconFacebookCircleFill } from './icon-facebook-circle-fill'
import { IconFacebookSquareFill } from './icon-facebook-square-fill'
import { IconGoogleCircleFill } from './icon-google-circle-fill'
import { IconQqCircleFill } from './icon-qq-circle-fill'
import { IconTwitterCircleFill } from './icon-twitter-circle-fill'
import { IconWeiboCircleFill } from './icon-weibo-circle-fill'
import { IconAlipayCircle } from './icon-alipay-circle'
import { IconCodeSandbox } from './icon-code-sandbox'
import { IconCodepen } from './icon-codepen'
import { IconFacebook } from './icon-facebook'
import { IconGithub } from './icon-github'
import { IconGitlab } from './icon-gitlab'
import { IconGoogle } from './icon-google'
import { IconQqZone } from './icon-qq-zone'
import { IconQq } from './icon-qq'
import { IconTwitter } from './icon-twitter'
import { IconWechatPay } from './icon-wechat-pay'
import { IconWechat } from './icon-wechat'
import { IconWeibo } from './icon-weibo'
import { IconMuteFill } from './icon-mute-fill'
import { IconPauseCircleFill } from './icon-pause-circle-fill'
import { IconPlayArrowFill } from './icon-play-arrow-fill'
import { IconPlayCircleFill } from './icon-play-circle-fill'
import { IconSkipNextFill } from './icon-skip-next-fill'
import { IconSkipPreviousFill } from './icon-skip-previous-fill'
import { IconSoundFill } from './icon-sound-fill'
import { IconBackward } from './icon-backward'
import { IconForward } from './icon-forward'
import { IconFullscreenExit } from './icon-fullscreen-exit'
import { IconFullscreen } from './icon-fullscreen'
import { IconLiveBroadcast } from './icon-live-broadcast'
import { IconMusic } from './icon-music'
import { IconMute } from './icon-mute'
import { IconPauseCircle } from './icon-pause-circle'
import { IconPause } from './icon-pause'
import { IconPlayArrow } from './icon-play-arrow'
import { IconPlayCircle } from './icon-play-circle'
import { IconRecordStop } from './icon-record-stop'
import { IconRecord } from './icon-record'
import { IconSkipNext } from './icon-skip-next'
import { IconSkipPrevious } from './icon-skip-previous'
import { IconSound } from './icon-sound'
import { IconAlertCircle } from './icon-alert-circle'
import { IconAlert } from './icon-alert'
import { IconArrowUpBoldBoxFill } from './icon-arrow-up-bold-box-fill'
import { IconArrowUpBoldBox } from './icon-arrow-up-bold-box'
import { IconBarcodeScan } from './icon-barcode-scan'
import { IconBellFill } from './icon-bell-fill'
import { IconBell } from './icon-bell'
import { IconBookmarkFill } from './icon-bookmark-fill'
import { IconCakeVariant } from './icon-cake-variant'
import { IconCalendarMonthFill } from './icon-calendar-month-fill'
import { IconCalendarMonth } from './icon-calendar-month'
import { IconCameraFill } from './icon-camera-fill'
import { IconCardAccountDetailsFill } from './icon-card-account-details-fill'
import { IconCardAccountDetails } from './icon-card-account-details'
import { IconCartFill } from './icon-cart-fill'
import { IconCart } from './icon-cart'
import { IconChatProcessingFill } from './icon-chat-processing-fill'
import { IconChatProcessing } from './icon-chat-processing'
import { IconCheckboxBlank } from './icon-checkbox-blank'
import { IconCheckboxMarkedCircleFill } from './icon-checkbox-marked-circle-fill'
import { IconCheckboxMarkedCircle } from './icon-checkbox-marked-circle'
import { IconCheckboxMarkedFill } from './icon-checkbox-marked-fill'
import { IconCheckboxMarked } from './icon-checkbox-marked'
import { IconChevronDown } from './icon-chevron-down'
import { IconChevronLeft } from './icon-chevron-left'
import { IconChevronRight } from './icon-chevron-right'
import { IconChevronUp } from './icon-chevron-up'
import { IconCloseBoxFill } from './icon-close-box-fill'
import { IconCloseBox } from './icon-close-box'
import { IconCodeJson } from './icon-code-json'
import { IconDownloadFill } from './icon-download-fill'
import { IconEmailFill } from './icon-email-fill'
import { IconError } from './icon-error'
import { IconEyeFill } from './icon-eye-fill'
import { IconFileDocument } from './icon-file-document'
import { IconFormatListCheckbox } from './icon-format-list-checkbox'
import { IconHeartHalfFull } from './icon-heart-half-full'
import { IconHomeFill } from './icon-home-fill'
import { IconImageFill } from './icon-image-fill'
import { IconLocationFill } from './icon-location-fill'
import { IconLocationRadiusFill } from './icon-location-radius-fill'
import { IconLocationRadius } from './icon-location-radius'
import { IconLockFill } from './icon-lock-fill'
import { IconMenuDown } from './icon-menu-down'
import { IconMenuLeft } from './icon-menu-left'
import { IconMenuOpen } from './icon-menu-open'
import { IconMenuRight } from './icon-menu-right'
import { IconMenuUp } from './icon-menu-up'
import { IconMessageProcessing } from './icon-message-processing'
import { IconMessageText } from './icon-message-text'
import { IconMinusBoxFill } from './icon-minus-box-fill'
import { IconMinusBox } from './icon-minus-box'
import { IconNotebook } from './icon-notebook'
import { IconPaletteFill } from './icon-palette-fill'
import { IconPhoneFill } from './icon-phone-fill'
import { IconPinFill } from './icon-pin-fill'
import { IconPinOffFill } from './icon-pin-off-fill'
import { IconPinOff } from './icon-pin-off'
import { IconPin } from './icon-pin'
import { IconPower } from './icon-power'
import { IconQrCodeScan } from './icon-qr-code-scan'
import { IconRadioBlank } from './icon-radio-blank'
import { IconRadioMarked } from './icon-radio-marked'
import { IconSettingsFill } from './icon-settings-fill'
import { IconShareFill } from './icon-share-fill'
import { IconShare } from './icon-share'
import { IconShoppingFill } from './icon-shopping-fill'
import { IconShopping } from './icon-shopping'
import { IconStarHalfFull } from './icon-star-half-full'
import { IconTagFill } from './icon-tag-fill'
import { IconTrashCanFill } from './icon-trash-can-fill'
import { IconTrashCan } from './icon-trash-can'
import { IconUploadFill } from './icon-upload-fill'
import { IconUserCircleFill } from './icon-user-circle-fill'
import { IconUserCircle } from './icon-user-circle'
import { IconWarning } from './icon-warning'
import { IconWeatherCloudy } from './icon-weather-cloudy'
import { IconWeatherLightning } from './icon-weather-lightning'
import { IconWeatherNight } from './icon-weather-night'
import { IconWeatherPouring } from './icon-weather-pouring'
import { IconWeatherRainy } from './icon-weather-rainy'
import { IconWeatherSnowy } from './icon-weather-snowy'
import { IconWhiteBalanceSunny } from './icon-white-balance-sunny'
import { IconXml } from './icon-xml'
import { IconZoomInFill } from './icon-zoom-in-fill'
import { IconZoomOutFill } from './icon-zoom-out-fill'
import { IconCheckCircleFill } from './icon-check-circle-fill'
import { IconCloseCircleFill } from './icon-close-circle-fill'
import { IconExclamationCircleFill } from './icon-exclamation-circle-fill'
import { IconExclamationPolygonFill } from './icon-exclamation-polygon-fill'
import { IconInfoCircleFill } from './icon-info-circle-fill'
import { IconMinusCircleFill } from './icon-minus-circle-fill'
import { IconPlusCircleFill } from './icon-plus-circle-fill'
import { IconQuestionCircleFill } from './icon-question-circle-fill'
import { IconCheckCircle } from './icon-check-circle'
import { IconCheckSquare } from './icon-check-square'
import { IconCheck } from './icon-check'
import { IconClockCircle } from './icon-clock-circle'
import { IconCloseCircle } from './icon-close-circle'
import { IconClose } from './icon-close'
import { IconExclamationCircle } from './icon-exclamation-circle'
import { IconExclamation } from './icon-exclamation'
import { IconInfoCircle } from './icon-info-circle'
import { IconInfo } from './icon-info'
import { IconMinusCircle } from './icon-minus-circle'
import { IconMinus } from './icon-minus'
import { IconPlusCircle } from './icon-plus-circle'
import { IconPlus } from './icon-plus'
import { IconQuestionCircle } from './icon-question-circle'
import { IconQuestion } from './icon-question'
import { IconStop } from './icon-stop'

const icons = {
  IconEmptyDefault,
  IconErrorNetwork,
  IconErrorUnknown,
  IconSuccessSubmitted,
  IconArrowDown,
  IconArrowFall,
  IconArrowLeft,
  IconArrowRight,
  IconArrowRise,
  IconArrowUp,
  IconCaretDown,
  IconCaretLeft,
  IconCaretRight,
  IconCaretUp,
  IconDoubleDown,
  IconDoubleLeft,
  IconDoubleRight,
  IconDoubleUp,
  IconDownCircle,
  IconDown,
  IconDragArrow,
  IconExpand,
  IconLeftCircle,
  IconLeft,
  IconMenuFold,
  IconMenuUnfold,
  IconRightCircle,
  IconRight,
  IconRotateLeft,
  IconRotateRight,
  IconShrink,
  IconSwap,
  IconToBottom,
  IconToLeft,
  IconToRight,
  IconToTop,
  IconUpCircle,
  IconUp,
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconAttachment,
  IconBackgroundColor,
  IconBold,
  IconBrush,
  IconCopy,
  IconDelete,
  IconEdit,
  IconEraser,
  IconFilter,
  IconFindReplace,
  IconFontColor,
  IconFormula,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
  IconH7,
  IconHighlight,
  IconItalic,
  IconLineHeight,
  IconLink,
  IconObliqueLine,
  IconOrderedList,
  IconOriginalSize,
  IconPaste,
  IconQuote,
  IconRedo,
  IconScissor,
  IconSortAscending,
  IconSortDescending,
  IconSort,
  IconStrikethrough,
  IconUnderline,
  IconUndo,
  IconUnorderedList,
  IconZoomIn,
  IconZoomOut,
  IconChineseFill,
  IconEnglishFill,
  IconFaceFrownFill,
  IconFaceMehFill,
  IconFaceSmileFill,
  IconMoonFill,
  IconPenFill,
  IconSunFill,
  IconApps,
  IconArchive,
  IconBarChart,
  IconBook,
  IconBookmark,
  IconBranch,
  IconBug,
  IconBulb,
  IconCalendarClock,
  IconCalendar,
  IconCamera,
  IconCloud,
  IconCommand,
  IconCommon,
  IconCompass,
  IconComputer,
  IconCopyright,
  IconDashboard,
  IconDesktop,
  IconDice,
  IconDragDotVertical,
  IconDragDot,
  IconDriveFile,
  IconEar,
  IconEmail,
  IconEmpty,
  IconExperiment,
  IconFileAudio,
  IconFileImage,
  IconFilePdf,
  IconFileVideo,
  IconFile,
  IconFire,
  IconFolderAdd,
  IconFolderDelete,
  IconFolder,
  IconGift,
  IconIdCard,
  IconImageClose,
  IconImage,
  IconInteraction,
  IconLanguage,
  IconLayers,
  IconLayout,
  IconLoading,
  IconLocation,
  IconLock,
  IconLoop,
  IconMan,
  IconMenu,
  IconMindMapping,
  IconMobile,
  IconMoon,
  IconMosaic,
  IconNav,
  IconNotificationClose,
  IconNotification,
  IconPalette,
  IconPen,
  IconPhone,
  IconPrinter,
  IconPublic,
  IconPushpin,
  IconQrCode,
  IconRelation,
  IconRobotAdd,
  IconRobot,
  IconSafe,
  IconSchedule,
  IconShake,
  IconSkin,
  IconStamp,
  IconStorage,
  IconSubscribeAdd,
  IconSubscribe,
  IconSubscribed,
  IconSun,
  IconTag,
  IconTags,
  IconThunderbolt,
  IconTool,
  IconTrophy,
  IconUnlock,
  IconUserAdd,
  IconUserGroup,
  IconUser,
  IconVideoCamera,
  IconWifi,
  IconWoman,
  IconHeartFill,
  IconStarFill,
  IconThumbDownFill,
  IconThumbUpFill,
  IconAt,
  IconCloudDownload,
  IconCodeBlock,
  IconCodeSquare,
  IconCode,
  IconCustomerService,
  IconDownload,
  IconExport,
  IconEyeInvisible,
  IconEye,
  IconHeart,
  IconHistory,
  IconHome,
  IconImport,
  IconLaunch,
  IconList,
  IconMessageBanned,
  IconMessage,
  IconMoreVertical,
  IconMore,
  IconPoweroff,
  IconRefresh,
  IconReply,
  IconSave,
  IconScan,
  IconSearch,
  IconSelectAll,
  IconSend,
  IconSettings,
  IconShareAlt,
  IconShareExternal,
  IconShareInternal,
  IconStar,
  IconSync,
  IconThumbDown,
  IconThumbUp,
  IconTranslate,
  IconUpload,
  IconVoice,
  IconBytedanceColor,
  IconLarkColor,
  IconTiktokColor,
  IconXiguaColor,
  IconFacebookCircleFill,
  IconFacebookSquareFill,
  IconGoogleCircleFill,
  IconQqCircleFill,
  IconTwitterCircleFill,
  IconWeiboCircleFill,
  IconAlipayCircle,
  IconCodeSandbox,
  IconCodepen,
  IconFacebook,
  IconGithub,
  IconGitlab,
  IconGoogle,
  IconQqZone,
  IconQq,
  IconTwitter,
  IconWechatPay,
  IconWechat,
  IconWeibo,
  IconMuteFill,
  IconPauseCircleFill,
  IconPlayArrowFill,
  IconPlayCircleFill,
  IconSkipNextFill,
  IconSkipPreviousFill,
  IconSoundFill,
  IconBackward,
  IconForward,
  IconFullscreenExit,
  IconFullscreen,
  IconLiveBroadcast,
  IconMusic,
  IconMute,
  IconPauseCircle,
  IconPause,
  IconPlayArrow,
  IconPlayCircle,
  IconRecordStop,
  IconRecord,
  IconSkipNext,
  IconSkipPrevious,
  IconSound,
  IconAlertCircle,
  IconAlert,
  IconArrowUpBoldBoxFill,
  IconArrowUpBoldBox,
  IconBarcodeScan,
  IconBellFill,
  IconBell,
  IconBookmarkFill,
  IconCakeVariant,
  IconCalendarMonthFill,
  IconCalendarMonth,
  IconCameraFill,
  IconCardAccountDetailsFill,
  IconCardAccountDetails,
  IconCartFill,
  IconCart,
  IconChatProcessingFill,
  IconChatProcessing,
  IconCheckboxBlank,
  IconCheckboxMarkedCircleFill,
  IconCheckboxMarkedCircle,
  IconCheckboxMarkedFill,
  IconCheckboxMarked,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconCloseBoxFill,
  IconCloseBox,
  IconCodeJson,
  IconDownloadFill,
  IconEmailFill,
  IconError,
  IconEyeFill,
  IconFileDocument,
  IconFormatListCheckbox,
  IconHeartHalfFull,
  IconHomeFill,
  IconImageFill,
  IconLocationFill,
  IconLocationRadiusFill,
  IconLocationRadius,
  IconLockFill,
  IconMenuDown,
  IconMenuLeft,
  IconMenuOpen,
  IconMenuRight,
  IconMenuUp,
  IconMessageProcessing,
  IconMessageText,
  IconMinusBoxFill,
  IconMinusBox,
  IconNotebook,
  IconPaletteFill,
  IconPhoneFill,
  IconPinFill,
  IconPinOffFill,
  IconPinOff,
  IconPin,
  IconPower,
  IconQrCodeScan,
  IconRadioBlank,
  IconRadioMarked,
  IconSettingsFill,
  IconShareFill,
  IconShare,
  IconShoppingFill,
  IconShopping,
  IconStarHalfFull,
  IconTagFill,
  IconTrashCanFill,
  IconTrashCan,
  IconUploadFill,
  IconUserCircleFill,
  IconUserCircle,
  IconWarning,
  IconWeatherCloudy,
  IconWeatherLightning,
  IconWeatherNight,
  IconWeatherPouring,
  IconWeatherRainy,
  IconWeatherSnowy,
  IconWhiteBalanceSunny,
  IconXml,
  IconZoomInFill,
  IconZoomOutFill,
  IconCheckCircleFill,
  IconCloseCircleFill,
  IconExclamationCircleFill,
  IconExclamationPolygonFill,
  IconInfoCircleFill,
  IconMinusCircleFill,
  IconPlusCircleFill,
  IconQuestionCircleFill,
  IconCheckCircle,
  IconCheckSquare,
  IconCheck,
  IconClockCircle,
  IconCloseCircle,
  IconClose,
  IconExclamationCircle,
  IconExclamation,
  IconInfoCircle,
  IconInfo,
  IconMinusCircle,
  IconMinus,
  IconPlusCircle,
  IconPlus,
  IconQuestionCircle,
  IconQuestion,
  IconStop,
}

export default {
  ...icons,
  install(app: App) {
    Object.values(icons).forEach((icon) => app.use(icon))
  },
}
