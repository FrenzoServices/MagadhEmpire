export default function Home() {
  return (
    <main className="container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      textAlign: 'center',
      padding: 'var(--spacing-12) var(--spacing-4)'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: 'var(--font-size-5xl)', color: 'var(--color-primary-dark)' }}>
          Magadh Empire
        </h1>
        <p style={{ 
          fontSize: 'var(--font-size-xl)', 
          color: 'var(--color-text-secondary)',
          marginTop: 'var(--spacing-4)',
          maxWidth: '600px',
          marginInline: 'auto'
        }}>
          A digital odyssey through the grandeur of Indian history. From ancient eras to legendary dynasties, witness the stories that shaped a civilization.
        </p>
        
        <div style={{ marginTop: 'var(--spacing-8)', display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center' }}>
          <div style={{
            padding: 'var(--spacing-3) var(--spacing-8)',
            backgroundColor: 'var(--color-primary-dark)',
            color: 'var(--color-text-inverse)',
            borderRadius: 'var(--border-radius-base)',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Explore Eras
          </div>
          <div style={{
            padding: 'var(--spacing-3) var(--spacing-8)',
            border: '2px solid var(--color-primary-dark)',
            color: 'var(--color-primary-dark)',
            borderRadius: 'var(--border-radius-base)',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Latest Series
          </div>
        </div>
      </div>
    </main>
  );
}
