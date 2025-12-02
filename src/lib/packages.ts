export interface Package {
    id: string;
    slug: string;
    name: string;
    price: number;
    originalPrice?: number;
    description: string;
    testsIncluded: string[];
    turnaroundTime: string;
    preparation: string;
    isPopular?: boolean;
    category: 'Full Body' | 'Specialized' | 'Routine' | 'Covid';
}

export const PACKAGES: Package[] = [
    {
        id: '1',
        slug: 'full-body-checkup-advanced',
        name: 'Full Body Checkup - Advanced',
        price: 2999,
        originalPrice: 5000,
        description: 'Comprehensive health assessment covering all vital organs including Heart, Liver, Kidney, Thyroid, and Blood profile.',
        testsIncluded: ['CBC', 'Lipid Profile', 'Liver Function Test', 'Kidney Function Test', 'Thyroid Profile', 'HbA1c', 'Iron Studies', 'Vitamin D', 'Vitamin B12'],
        turnaroundTime: '24 Hours',
        preparation: '10-12 hours fasting required',
        isPopular: true,
        category: 'Full Body'
    },
    {
        id: '2',
        slug: 'thyroid-profile-total',
        name: 'Thyroid Profile (Total)',
        price: 550,
        originalPrice: 800,
        description: 'Screening for Thyroid disorders including T3, T4, and TSH levels.',
        testsIncluded: ['T3 (Triiodothyronine)', 'T4 (Thyroxine)', 'TSH (Thyroid Stimulating Hormone)'],
        turnaroundTime: '12 Hours',
        preparation: 'No fasting required',
        category: 'Routine'
    },
    {
        id: '3',
        slug: 'diabetes-screening-basic',
        name: 'Diabetes Screening - Basic',
        price: 499,
        originalPrice: 700,
        description: 'Essential tests for diabetes monitoring and screening.',
        testsIncluded: ['Fasting Blood Sugar', 'Post Prandial Blood Sugar', 'HbA1c'],
        turnaroundTime: '12 Hours',
        preparation: 'Fasting required for FBS',
        category: 'Routine'
    },
    {
        id: '4',
        slug: 'cardiac-risk-profile',
        name: 'Cardiac Risk Profile',
        price: 1500,
        originalPrice: 2200,
        description: 'Assess your heart health risks with this specialized profile.',
        testsIncluded: ['Lipid Profile', 'Hs-CRP', 'Homocysteine', 'Lipoprotein (a)', 'Apolipoprotein A1 & B'],
        turnaroundTime: '24 Hours',
        preparation: '12 hours fasting required',
        category: 'Specialized'
    },
    {
        id: '5',
        slug: 'covid-19-rt-pcr',
        name: 'COVID-19 RT-PCR',
        price: 500,
        description: 'Gold standard test for COVID-19 detection. ICMR approved.',
        testsIncluded: ['SARS-CoV-2 RNA Detection'],
        turnaroundTime: '12-24 Hours',
        preparation: 'No special preparation',
        category: 'Covid'
    },
    {
        id: '6',
        slug: 'vitamin-deficiency-check',
        name: 'Vitamin Deficiency Check',
        price: 1200,
        originalPrice: 2000,
        description: 'Check for essential vitamin deficiencies that affect energy and immunity.',
        testsIncluded: ['Vitamin D Total', 'Vitamin B12'],
        turnaroundTime: '24 Hours',
        preparation: 'No fasting required',
        isPopular: true,
        category: 'Specialized'
    }
];
