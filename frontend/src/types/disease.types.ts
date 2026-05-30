export interface Disease {
    id: number;
    name: string;
    category: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    description: string;
    causes: string;
    symptoms: string;
    diagnosis_method: string;
    treatment: string;
    prevention: string;
    recovery_time: string;
    is_contagious: boolean;
}

export interface PredictionResult {
    disease: Disease;
    confidence_score: number;
    severity_level: string;
    recommendation: string;
    symptoms_detected: string[];
    next_steps: string[];
    when_to_see_doctor: string;
}

export interface Symptom {
    id: number;
    name: string;
    category: string;
    description: string;
    severity_weight: number;
    is_critical: boolean;
}

export interface Question {
    id: number;
    question_text: string;
    question_type: 'boolean' | 'multiple_choice' | 'numeric' | 'text';
    options?: string[];
    symptom_id?: number;
}