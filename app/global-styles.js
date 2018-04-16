import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .sr-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  #root{
      overflow-x:hidden;
  }
  .pt-xs{
      padding-top:.3125rem !important;
  }
  @media (min-width:992px){
      .pt-xs{
          padding-top :.625rem !important;
      }
  }
  .pb-xs{
      padding-bottom:.3125rem !important;
  }
  @media (min-width:992px){
      .pb-xs{
          padding-bottom :.625rem !important;
      }
  }
  .pl-xs{
      padding-left:.3125rem !important;
  }
  @media (min-width:992px){
      .pl-xs{
          padding-left :.625rem !important;
      }
  }
  .pr-xs{
      padding-right:.3125rem !important;
  }
  @media (min-width:992px){
      .pr-xs{
          padding-right :.625rem !important;
      }
  }
  .pv-xs{
      padding-top:.3125rem !important;
      padding-bottom :.3125rem !important;
  }
  @media (min-width:992px){
      .pv-xs{
          padding-top :.625rem !important;
          padding-bottom :.625rem !important;
      }
  }
  .ph-xs{
      padding-right:.3125rem !important;
      padding-left :.3125rem !important;
  }
  @media (min-width:992px){
      .ph-xs{
          padding-right :.625rem !important;
          padding-left :.625rem !important;
      }
  }
  .p-xs{
      padding:.3125rem !important;
  }
  @media (min-width:992px){
      .p-xs{
          padding :.625rem !important;
      }
  }
  .pt-sm{
      padding-top:0.625rem !important;
  }
  @media (min-width:992px){
      .pt-sm{
          padding-top :1.25rem !important;
      }
  }
  .pb-sm{
      padding-bottom:0.625rem !important;
  }
  @media (min-width:992px){
      .pb-sm{
          padding-bottom :1.25rem !important;
      }
  }
  .pl-sm{
      padding-left:0.625rem !important;
  }
  @media (min-width:992px){
      .pl-sm{
          padding-left :1.25rem !important;
      }
  }
  .pr-sm{
      padding-right:0.625rem !important;
  }
  @media (min-width:992px){
      .pr-sm{
          padding-right :1.25rem !important;
      }
  }
  .pv-sm{
      padding-top:0.625rem !important;
      padding-bottom :0.625rem !important;
  }
  @media (min-width:992px){
      .pv-sm{
          padding-top :1.25rem !important;
          padding-bottom :1.25rem !important;
      }
  }
  .ph-sm{
      padding-right:0.625rem !important;
      padding-left :0.625rem !important;
  }
  @media (min-width:992px){
      .ph-sm{
          padding-right :1.25rem !important;
          padding-left :1.25rem !important;
      }
  }
  .p-sm{
      padding:0.625rem !important;
  }
  @media (min-width:992px){
      .p-sm{
          padding :1.25rem !important;
      }
  }
  .pt-md{
      padding-top:0.9375rem !important;
  }
  @media (min-width:992px){
      .pt-md{
          padding-top :1.875rem !important;
      }
  }
  .pb-md{
      padding-bottom:0.9375rem !important;
  }
  @media (min-width:992px){
      .pb-md{
          padding-bottom :1.875rem !important;
      }
  }
  .pl-md{
      padding-left:0.9375rem !important;
  }
  @media (min-width:992px){
      .pl-md{
          padding-left :1.875rem !important;
      }
  }
  .pr-md{
      padding-right:0.9375rem !important;
  }
  @media (min-width:992px){
      .pr-md{
          padding-right :1.875rem !important;
      }
  }
  .pv-md{
      padding-top:0.9375rem !important;
      padding-bottom :0.9375rem !important;
  }
  @media (min-width:992px){
      .pv-md{
          padding-top :1.875rem !important;
          padding-bottom :1.875rem !important;
      }
  }
  .ph-md{
      padding-right:0.9375rem !important;
      padding-left :0.9375rem !important;
  }
  @media (min-width:992px){
      .ph-md{
          padding-right :1.875rem !important;
          padding-left :1.875rem !important;
      }
  }
  .p-md{
      padding:0.9375rem !important;
  }
  @media (min-width:992px){
      .p-md{
          padding :1.875rem !important;
      }
  }
  .pt-lg{
      padding-top:1.25rem !important;
  }
  @media (min-width:992px){
      .pt-lg{
          padding-top :2.5rem !important;
      }
  }
  .pb-lg{
      padding-bottom:1.25rem !important;
  }
  @media (min-width:992px){
      .pb-lg{
          padding-bottom :2.5rem !important;
      }
  }
  .pl-lg{
      padding-left:1.25rem !important;
  }
  @media (min-width:992px){
      .pl-lg{
          padding-left :2.5rem !important;
      }
  }
  .pr-lg{
      padding-right:1.25rem !important;
  }
  @media (min-width:992px){
      .pr-lg{
          padding-right :2.5rem !important;
      }
  }
  .pv-lg{
      padding-top:1.25rem !important;
      padding-bottom :1.25rem !important;
  }
  @media (min-width:992px){
      .pv-lg{
          padding-top :2.5rem !important;
          padding-bottom :2.5rem !important;
      }
  }
  .ph-lg{
      padding-right:1.25rem !important;
      padding-left :1.25rem !important;
  }
  @media (min-width:992px){
      .ph-lg{
          padding-right :2.5rem !important;
          padding-left :2.5rem !important;
      }
  }
  .p-lg{
      padding:1.25rem !important;
  }
  @media (min-width:992px){
      .p-lg{
          padding :2.5rem !important;
      }
  }
  .pt-xl{
      padding-top:1.875rem !important;
  }
  @media (min-width:992px){
      .pt-xl{
          padding-top :3.75rem !important;
      }
  }
  .pb-xl{
      padding-bottom:1.875rem !important;
  }
  @media (min-width:992px){
      .pb-xl{
          padding-bottom :3.75rem !important;
      }
  }
  .pl-xl{
      padding-left:1.875rem !important;
  }
  @media (min-width:992px){
      .pl-xl{
          padding-left :3.75rem !important;
      }
  }
  .pr-xl{
      padding-right:1.875rem !important;
  }
  @media (min-width:992px){
      .pr-xl{
          padding-right :3.75rem !important;
      }
  }
  .pv-xl{
      padding-top:1.875rem !important;
      padding-bottom :1.875rem !important;
  }
  @media (min-width:992px){
      .pv-xl{
          padding-top :3.75rem !important;
          padding-bottom :3.75rem !important;
      }
  }
  .ph-xl{
      padding-right:1.875rem !important;
      padding-left :1.875rem !important;
  }
  @media (min-width:992px){
      .ph-xl{
          padding-right :3.75rem !important;
          padding-left :3.75rem !important;
      }
  }
  .p-xl{
      padding:1.875rem !important;
  }
  @media (min-width:992px){
      .p-xl{
          padding :3.75rem !important;
      }
  }
  .pt-xxl{
      padding-top:2.5rem !important;
  }
  @media (min-width:992px){
      .pt-xxl{
          padding-top :5rem !important;
      }
  }
  .pb-xxl{
      padding-bottom:2.5rem !important;
  }
  @media (min-width:992px){
      .pb-xxl{
          padding-bottom :5rem !important;
      }
  }
  .pl-xxl{
      padding-left:2.5rem !important;
  }
  @media (min-width:992px){
      .pl-xxl{
          padding-left :5rem !important;
      }
  }
  .pr-xxl{
      padding-right:2.5rem !important;
  }
  @media (min-width:992px){
      .pr-xxl{
          padding-right :5rem !important;
      }
  }
  .pv-xxl{
      padding-top:2.5rem !important;
      padding-bottom :2.5rem !important;
  }
  @media (min-width:992px){
      .pv-xxl{
          padding-top :5rem !important;
          padding-bottom :5rem !important;
      }
  }
  .ph-xxl{
      padding-right:2.5rem !important;
      padding-left :2.5rem !important;
  }
  @media (min-width:992px){
      .ph-xxl{
          padding-right :5rem !important;
          padding-left :5rem !important;
      }
  }
  .p-xxl{
      padding:2.5rem !important;
  }
  @media (min-width:992px){
      .p-xxl{
          padding :5rem !important;
      }
  }
  .mt-xs{
      margin-top:.3125rem !important;
  }
  @media (min-width:992px){
      .mt-xs{
          margin-top :.625rem !important;
      }
  }
  .mb-xs{
      margin-bottom:.3125rem !important;
  }
  @media (min-width:992px){
      .mb-xs{
          margin-bottom :.625rem !important;
      }
  }
  .ml-xs{
      margin-left:.3125rem !important;
  }
  @media (min-width:992px){
      .ml-xs{
          margin-left :.625rem !important;
      }
  }
  .mr-xs{
      margin-right:.3125rem !important;
  }
  @media (min-width:992px){
      .mr-xs{
          margin-right :.625rem !important;
      }
  }
  .mv-xs{
      margin-top:.3125rem !important;
      margin-bottom :.3125rem !important;
  }
  @media (min-width:992px){
      .mv-xs{
          margin-top :.625rem !important;
          margin-bottom :.625rem !important;
      }
  }
  .mh-xs{
      margin-right:.3125rem !important;
      margin-left :.3125rem !important;
  }
  @media (min-width:992px){
      .mh-xs{
          margin-right :.625rem !important;
          margin-left :.625rem !important;
      }
  }
  .m-xs{
      margin:.3125rem !important;
  }
  @media (min-width:992px){
      .m-xs{
          margin :.625rem !important;
      }
  }
  .mt-sm{
      margin-top:0.625rem !important;
  }
  @media (min-width:992px){
      .mt-sm{
          margin-top :1.25rem !important;
      }
  }
  .mb-sm{
      margin-bottom:0.625rem !important;
  }
  @media (min-width:992px){
      .mb-sm{
          margin-bottom :1.25rem !important;
      }
  }
  .ml-sm{
      margin-left:0.625rem !important;
  }
  @media (min-width:992px){
      .ml-sm{
          margin-left :1.25rem !important;
      }
  }
  .mr-sm{
      margin-right:0.625rem !important;
  }
  @media (min-width:992px){
      .mr-sm{
          margin-right :1.25rem !important;
      }
  }
  .mv-sm{
      margin-top:0.625rem !important;
      margin-bottom :0.625rem !important;
  }
  @media (min-width:992px){
      .mv-sm{
          margin-top :1.25rem !important;
          margin-bottom :1.25rem !important;
      }
  }
  .mh-sm{
      margin-right:0.625rem !important;
      margin-left :0.625rem !important;
  }
  @media (min-width:992px){
      .mh-sm{
          margin-right :1.25rem !important;
          margin-left :1.25rem !important;
      }
  }
  .m-sm{
      margin:0.625rem !important;
  }
  @media (min-width:992px){
      .m-sm{
          margin :1.25rem !important;
      }
  }
  .mt-md{
      margin-top:0.9375rem !important;
  }
  @media (min-width:992px){
      .mt-md{
          margin-top :1.875rem !important;
      }
  }
  .mb-md{
      margin-bottom:0.9375rem !important;
  }
  @media (min-width:992px){
      .mb-md{
          margin-bottom :1.875rem !important;
      }
  }
  .ml-md{
      margin-left:0.9375rem !important;
  }
  @media (min-width:992px){
      .ml-md{
          margin-left :1.875rem !important;
      }
  }
  .mr-md{
      margin-right:0.9375rem !important;
  }
  @media (min-width:992px){
      .mr-md{
          margin-right :1.875rem !important;
      }
  }
  .mv-md{
      margin-top:0.9375rem !important;
      margin-bottom :0.9375rem !important;
  }
  @media (min-width:992px){
      .mv-md{
          margin-top :1.875rem !important;
          margin-bottom :1.875rem !important;
      }
  }
  .mh-md{
      margin-right:0.9375rem !important;
      margin-left :0.9375rem !important;
  }
  @media (min-width:992px){
      .mh-md{
          margin-right :1.875rem !important;
          margin-left :1.875rem !important;
      }
  }
  .m-md{
      margin:0.9375rem !important;
  }
  @media (min-width:992px){
      .m-md{
          margin :1.875rem !important;
      }
  }
  .mt-lg{
      margin-top:1.25rem !important;
  }
  @media (min-width:992px){
      .mt-lg{
          margin-top :2.5rem !important;
      }
  }
  .mb-lg{
      margin-bottom:1.25rem !important;
  }
  @media (min-width:992px){
      .mb-lg{
          margin-bottom :2.5rem !important;
      }
  }
  .ml-lg{
      margin-left:1.25rem !important;
  }
  @media (min-width:992px){
      .ml-lg{
          margin-left :2.5rem !important;
      }
  }
  .mr-lg{
      margin-right:1.25rem !important;
  }
  @media (min-width:992px){
      .mr-lg{
          margin-right :2.5rem !important;
      }
  }
  .mv-lg{
      margin-top:1.25rem !important;
      margin-bottom :1.25rem !important;
  }
  @media (min-width:992px){
      .mv-lg{
          margin-top :2.5rem !important;
          margin-bottom :2.5rem !important;
      }
  }
  .mh-lg{
      margin-right:1.25rem !important;
      margin-left :1.25rem !important;
  }
  @media (min-width:992px){
      .mh-lg{
          margin-right :2.5rem !important;
          margin-left :2.5rem !important;
      }
  }
  .m-lg{
      margin:1.25rem !important;
  }
  @media (min-width:992px){
      .m-lg{
          margin :2.5rem !important;
      }
  }
  .mt-xl{
      margin-top:1.875rem !important;
  }
  @media (min-width:992px){
      .mt-xl{
          margin-top :3.75rem !important;
      }
  }
  .mb-xl{
      margin-bottom:1.875rem !important;
  }
  @media (min-width:992px){
      .mb-xl{
          margin-bottom :3.75rem !important;
      }
  }
  .ml-xl{
      margin-left:1.875rem !important;
  }
  @media (min-width:992px){
      .ml-xl{
          margin-left :3.75rem !important;
      }
  }
  .mr-xl{
      margin-right:1.875rem !important;
  }
  @media (min-width:992px){
      .mr-xl{
          margin-right :3.75rem !important;
      }
  }
  .mv-xl{
      margin-top:1.875rem !important;
      margin-bottom :1.875rem !important;
  }
  @media (min-width:992px){
      .mv-xl{
          margin-top :3.75rem !important;
          margin-bottom :3.75rem !important;
      }
  }
  .mh-xl{
      margin-right:1.875rem !important;
      margin-left :1.875rem !important;
  }
  @media (min-width:992px){
      .mh-xl{
          margin-right :3.75rem !important;
          margin-left :3.75rem !important;
      }
  }
  .m-xl{
      margin:1.875rem !important;
  }
  @media (min-width:992px){
      .m-xl{
          margin :3.75rem !important;
      }
  }
  .mt-xxl{
      margin-top:2.5rem !important;
  }
  @media (min-width:992px){
      .mt-xxl{
          margin-top :5rem !important;
      }
  }
  .mb-xxl{
      margin-bottom:2.5rem !important;
  }

  @media (min-width:992px){
      .mb-xxl{
          margin-bottom :5rem !important;
      }
  }
  .ml-xxl{
      margin-left:2.5rem !important;
  }
  @media (min-width:992px){
      .ml-xxl{
          margin-left :5rem !important;
      }
  }
  .mr-xxl{
      margin-right:2.5rem !important;
  }
  @media (min-width:992px){
      .mr-xxl{
          margin-right :5rem !important;
      }
  }
  .mv-xxl{
      margin-top:2.5rem !important;
      margin-bottom :2.5rem !important;
  }
  @media (min-width:992px){
      .mv-xxl{
          margin-top :5rem !important;
          margin-bottom :5rem !important;
      }
  }
  .mh-xxl{
      margin-right:2.5rem !important;
      margin-left :2.5rem !important;
  }
  @media (min-width:992px){
      .mh-xxl{
          margin-right :5rem !important;
          margin-left :5rem !important;
      }
  }
  .m-xxl{
      margin:2.5rem !important;
  }
  @media (min-width:992px){
      .m-xxl{
          margin :5rem !important;
      }
  }
  .ModalLeft .ReactModal__Overlay,.ModalRight .ReactModal__Overlay,.ModalSecondary .ReactModal__Overlay{
      top:59px !important;
  }
  @media screen{
      #printSection{
          display:none;
      }
  }
  @media print{
      #root *{
          display:none;
      }
      .ReactModalPortal{
          display:none;
      }
      .ModalRight,.ModalLeft,.ModalSecondary{
          display:none;
      }
      #printSection{
          display:block;
      }
  }

  .slick-current{
    border: 1px solid gray;
  }

`;
