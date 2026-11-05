import pytest
from utils.helper_module_71 import process_data_71

def test_process_data_71():
    assert process_data_71({"key": "value", "none_val": None}) == {"key": "value"}
    assert process_data_71(None) == {}
