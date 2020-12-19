// eslint-disable-next-line react/prop-types, no-undef
export default function SSR ({ framework }) {
  return <div>{framework} ssr example</div>
}

export function getServerSideProps () {
  return {
    props: { framework: 'preact' }
  }
}
