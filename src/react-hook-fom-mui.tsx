
/**
 * https://time-is-life.fun/mui-react-hook-form-typescript/
 * 
 * 
 */

import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
// Supported locales: https://github.com/iamkun/dayjs/tree/dev/src/locale
import 'dayjs/locale/ja';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

type FormFields = {
  name: string;
  description: string;
  priority: number;
  deadline: Dayjs;
};

// Initail form values
const defaultValues: FormFields = {
  name: '',
  description: '',
  priority: 1,
  deadline: dayjs(new Date()),
};

// Validation rules
const validationRules = {
  name: {
    required: 'Please input todo name',
    maxLength: { value: 30, message: 'Name must be 30 characters or less' },
  },
  description: {
    maxLength: { value: 1000, message: 'Description must be 1000 characters or less' },
  },
  priority: {
    required: 'Please select a priority',
  },
  deadline: {
    validate: (val: Dayjs | null) => {
      if (val === null) {
        return 'Please input the deadline';
      }
      if (!val.format('YYYYMMDD').match(/^\d{8}$/g)) {
        return 'Invalid date format';
      }
      return true;
    },
  },
};

// Priority list
const priorityList = [
  { value: 1, label: 'high' },
  { value: 2, label: 'middle' },
  { value: 3, label: 'low' },
];

export default function CreateTodo() {
  const { control, handleSubmit } = useForm<FormFields>({
    defaultValues,
    mode: 'onChange',  // The `onChange` might cause perf issue...
  });

  const onSubmitForm = (values: FormFields) => {
    // Create a todo
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        TODO List
      </Typography>

      <Stack component="form" noValidate onSubmit={handleSubmit(onSubmitForm)} spacing={3}>
        {/* Name */}
        <Controller
          name="name"
          control={control}
          rules={validationRules.name}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              fullWidth
              type="text"
              label="Name"
              error={!!fieldState.error?.message}
              helperText={fieldState.error?.message}
            />
          )}
        />
        {/* Description */}
        <Controller
          name="description"
          control={control}
          rules={validationRules.description}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="text"
              label="description"
              error={!!fieldState.error?.message}
              helperText={fieldState.error?.message}
              multiline
              rows={4}
            />
          )}
        />
        {/* Priority */}
        <Controller
          name="priority"
          control={control}
          rules={validationRules.priority}
          render={({ field, fieldState }) => (
            <FormControl fullWidth error={!!fieldState.error?.message}>
              <InputLabel id="area-label">Priority</InputLabel>
              <Select {...field} labelId="area-label" label="Priority">
                {priorityList.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            </FormControl>
          )}
        />
        {/* Deadline */}
        <Controller
          name="deadline"
          control={control}
          rules={validationRules.deadline}
          render={({ field, fieldState }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
              <DatePicker
                {...field}
                label="Deadline"
                inputFormat="YYYY/MM/DD"
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                  />
                )}
                // Validation is not fired with the default react-hook-form mode. So you need this custom onChange event handling.
                onChange={(date) => field.onChange(date)} 
              />
            </LocalizationProvider>
          )}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
