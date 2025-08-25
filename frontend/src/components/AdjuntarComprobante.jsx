import React, { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';

function AdjuntarComprobante({ show, onHide, cuotaId, onAdjuntar }) {
  const [archivo, setArchivo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleArchivoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validar tipo de archivo
      if (!file.type.startsWith('image/')) {
        setError('Solo se permiten archivos de imagen (JPEG, JPG)');
        setArchivo(null);
        return;
      }
      
      // Validar tamaño (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('El archivo es demasiado grande. Máximo 5MB');
        setArchivo(null);
        return;
      }
      
      setArchivo(file);
      setError('');
    }
  };

  const handleSubmit = async () => {
    if (!archivo) {
      setError('Debes seleccionar un archivo');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await onAdjuntar(cuotaId, archivo);
      onHide();
      setArchivo(null);
    } catch (err) {
      setError('Error al adjuntar el comprobante. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setArchivo(null);
    setError('');
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Adjuntar Comprobante</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Seleccionar archivo</Form.Label>
            <Form.Control
              type="file"
              accept="image/jpeg,image/jpg"
              onChange={handleArchivoChange}
              isInvalid={!!error}
            />
            <Form.Text className="text-muted">
              Solo archivos JPEG/JPG. Máximo 5MB.
            </Form.Text>
            {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button 
          variant="warning" 
          onClick={handleSubmit}
          disabled={!archivo || loading}
        >
          {loading ? 'Adjuntando...' : 'Adjuntar Comprobante'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AdjuntarComprobante;
